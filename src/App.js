import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

// export default App;

// import { Component } from "react/cjs/react.production.min";

class App extends React.Component {
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
