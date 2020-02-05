import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id != action.payload)
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

//gloabl state
export class Provider extends Component {
  state = {
    contacts: [],
    //instide state as consumer will take whole state, so dispatcher will be also accessable
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    /*fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(data =>
        this.setState({
          contacts: data
        })
      )
    );*/
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      contacts: res.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;