import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: true
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  deleteContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <i
                  className="fas fa-times"
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  style={{ float: "right", color: "red" }}
                />
                <Link to={`/edit/contact/${id}`}>
                  <i
                    className="fas fa-plus"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "green",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
