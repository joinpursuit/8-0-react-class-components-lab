import React from 'react';
import './App.css';
import ContactList from './ContactList';
import Feed from './Feed';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Profile />
        <Feed />
        <ContactList />
      </div>
    );
  }
}

export default App;
