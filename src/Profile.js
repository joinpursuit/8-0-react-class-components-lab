import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor() {
    super();
    this.name = 'Riley';
    this.title = 'Software Engineer';
    this.photo =
      'https://i.pinimg.com/originals/fc/31/d2/fc31d279e66c0b601f64a38d3bfd82a5.png';
    this.bio = 'Ipsum';
  }
  render() {
    return (
      <div className="Profile">
        <img src={this.photo} alt={this.same} />
        <h1>{this.name}</h1>
        <p className="title">{this.title}</p>
        <p>{this.bio}</p>
        <p>
          <button>Log Out</button>
        </p>
      </div>
    );
  }
}

export default Profile;
