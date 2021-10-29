import { Component } from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";
import UserProfile from "./UserProfile";

class App extends Component {
  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
        <UserProfile />
      </div>
    );
  }
}

export default App;
