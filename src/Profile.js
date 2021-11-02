import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="Profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg" alt="Grace Hopper"/>
                <h3>Grace Hopper</h3>
                <p>An American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers. Hopper was the first to devise the theory of machine-independent programming languages, and the FLOW-MATIC programming language she created using this theory was later extended to create COBOL, an early high-level programming language still in use today.</p>
            </div>
        );
    }
}

export default Profile;