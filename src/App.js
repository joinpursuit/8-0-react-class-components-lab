import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";
import Profile from "./Profile";

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
        <Profile />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

export default App;
