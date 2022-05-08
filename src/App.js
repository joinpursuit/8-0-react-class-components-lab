import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

// ---------------- ORIGINAL CODE ---------------- //
// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

// ---------------- REFACTORED CODE ---------------- //

class App extends React.Component {
  constructor() {
    super()
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
