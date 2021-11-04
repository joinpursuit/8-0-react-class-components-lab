import { Component } from "react";


class Profile extends Component () {
    constructor(){
        super()
    }
    render(){
        return (
             <div id="profile">
             <h2 id="name">Fairy</h2>
             <img src="https://i.pinimg.com/474x/31/b3/4a/31b34a198288fa2e1b4e4ba7dbff8857.jpg" alt="fairy"/>
             <p>This person is from a known cartoon </p>

             </div>
        )
    }
    
}

export default Profile