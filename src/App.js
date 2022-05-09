import React from 'react';

import './App.css';
import ContactList from './ContactList';
import Feed from './Feed';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='App-Div' data-testid='app'>
        <Feed />
        <ContactList />
      </div>
    );
  }
}
export default App;
