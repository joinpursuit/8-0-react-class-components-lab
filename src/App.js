import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";
import Profile from "./profile";
import Post from "./Post";


import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Feed />
      <ContactList />
      <Profile/>
      <Post/>
      
      </div>
    )
  }
}


