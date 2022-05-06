import { React, Component } from "react";
import "./App.css";

import ContactList from "./ContactList";
import Feed from "./Feed";

class App extends Component {
  //eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
      </div>
    );
  }
}

export default App;