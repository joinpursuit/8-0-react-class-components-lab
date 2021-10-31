import React from 'react';
import "./Profile.css";

class Profile extends React.Component {
    constructor(){
        super();
        this.person = {
            name: "Maleficent",
            image: "https://d.newsweek.com/en/full/1537772/maleficent.jpg?w=1600&h=1600&q=88&f=9fd59a79cdd012bc0188eb9b1f18df57",
            bio: "Maleficent is a powerful dark fairy living in the Moors, a magical forest realm bordering a human kingdom. As a young girl, Maleficent meets and falls in love with a human peasant boy named Stefan.",
          }
    }

    render(){
        return(
            <div className="Profile" data-testid="profile">
                <h3>{this.person.name}</h3>
                <img src={this.person.image} alt="profile-pic" />
                <p>{this.person.bio}</p>
            </div>
        )
    }
}

export default Profile;