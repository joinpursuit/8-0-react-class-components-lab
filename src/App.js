import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import './App.css'
import ContactList from './ContactList'
import Feed from './Feed'

class App extends Component {
  render() {
    return (
      <div className='App-Div'>
        <Feed />
        <ContactList />
      </div>
    )
  }
}
export default App
