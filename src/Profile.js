import React from "react";
import "./Profile.css";

class Profile extends React.Component {
  constructor() {
    super();
    this.photo =
      "https://www.holidaysmart.com/sites/default/files/daily/may26-shs1500_159287228.jpg";
    this.name = "Dracula";
    this.bio =
      "Un-dead for several hundreds of years. Night owl. Loves the colors black and red. Favorite drinks and foods are blood by far and unsuspecting living animals but prefers humans as long as they haven't consumed garlic recently. Favorite holiday by coincidence is today so cant wait to see everyone out celebrating, Happy Halloween! 🧛🏻‍♂️ ";
  }

  render() {
    return (
      <div className="Profile" data-testid="profile">
        <h2>{this.name}</h2>
        <img src={this.photo} alt="photo" />
        <p>{this.bio}</p>
      </div>
    );
  }
}

export default Profile;