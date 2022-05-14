import React from "react";
import "./App.css";
import { Component } from "react";
import ContactList from "./ContactList";
import Feed from "./Feed";

class App extends Component {
  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
      </div>
    )
  }
}

export default App;
