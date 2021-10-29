import react from "react";
import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    constructor() {
      super();
      this.image = "https://pbs.twimg.com/profile_images/1160927085210296321/DcZVqus1_400x400.jpg"
      this.name = "Master Shifu"
      this.bio = "Master Shifu, senior master of the Jade Palace and trainer of many kung fu warriors, including Po (the Dragon Warrior), the Furious Five, and Tai Lung."
    }
    render() {
      return (
        <div className="profile">
          <img src={this.image} />  
          <div>
          <h1>{this.name}</h1>
          <p>{this.bio}</p>
          </div>
        </div>
      );
    }
}

  
  export default Profile;