import React from "react";
import "./Profile.css"

class Profile extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="profile">
                <img src="logo192.png" alt="profile-image"/>
                <h3>Name of Person</h3>
                <p> short Bio that demonstrates css and react</p>
            </div>
        )
    }
}

export default Profile