import React from "react";
import './Profile.css'
class Profile extends React.Component {
  constructor() {
    super();
    this.text = "Biography of Nelson Mandela";
    this.bio = "Nelson Rolihlahla Mandela was born in Transkei, South Africa on July 18, 1918. His father was Hendry Mphakanyiswa of the Tembu Tribe. Mandela himself was educated at University College of Fort Hare and the University of Witwatersrand where he studied law. He joined the African National Congress in 1944 and was engaged in resistance against the ruling National Party’s apartheid policies after 1948. He went on trial for treason in 1956-1961 and was acquitted in 1961.";
    this.image =
      "https://www.nobelprize.org/images/mandela-13452-content-portrait-mobile-tiny.jpg";
  }
  render() {
    return (
      <div className="profile" data-testid="Profile">
        <h1>Profile</h1>
          <p>{this.text}</p>    
        <div className = 'profile-grid'>
            <div>
            <img src={this.image} />
          </div>
          <div>
            <p>{this.bio}</p>
          </div>
        </div>  
      </div>
    );
  }
}

export default Profile;
