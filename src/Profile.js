import React from "react";
import "./Profile.css";

const profileInfo = {
  title: "Profile Image",
  imageLink:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  description: "This is the description of the profile image",
};

class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img src={profileInfo.imageLink} alt="image" />
        <h1>John Romeo</h1>
        <p>
          Hello! My name is John. I am 40 years old and i live in Brooklyn New
          York.
        </p>
      </div>
    );
  }
}
export default Profile;
