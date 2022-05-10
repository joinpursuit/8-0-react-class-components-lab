import React from "react";
import { Component } from "react";

class Profile extends Component {
  constructor() {
    super();

    this.photo = "sdhjfka";
    this.name = "Juan";
    this.bio =
      "Juan is a programmer learning Full Stack Development at Pursuit";
  }

  render() {
    return (
      <div className="Profile">
        <img src={this.photo} alt="Profile Picture" />
        <p>
          <strong>{this.name}</strong>
        </p>
        <p>{this.bio}</p>
      </div>
    );
  }
}

export default Profile;
