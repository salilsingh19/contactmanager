import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
import NonFound from "./Components/pages/NonFound";
import test from "./Components/test/test";
import editContact from "./Components/contacts/editContact";
import { Provider } from "./Context";
import About from "./Components/pages/About";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/edit/contact/:id" component={editContact} />
                <Route exact path="/test" component={test} />
                <Route component={NonFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
