import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    render() {
      return (
        <div className="Profile" data-testid="profile">
          <p><strong>Profile</strong></p>
          <img src="https://content.fortune.com/wp-content/uploads/2021/09/40-under-40-2021-Rohan-Seth.jpg" alt="picture-of-rohan-seth"></img>
          <p>Rohan Seth</p>
          <p>Co-founder at Clubhouse and Lydian Accelerator</p>
        </div>
      )
    }
  }
  
  export default Profile;