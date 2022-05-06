import { React, Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import Feed from './Feed';

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

//The function App above can be re-written by using the class ... extends
class App extends Component {
  render() {
    return (
      <div className='App-Div'>
        <Feed />
        <ContactList />
      </div>
    );
  }
}

export default App;
