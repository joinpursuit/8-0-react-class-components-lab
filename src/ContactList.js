import { Component } from "react";
import "./ContactList.css";

// const ContactList = () => {
//   return (
//     <div className="ContactList" data-testid="contact-list">
//       <p>Contacts</p>
//       <ul>
//         <li>Andrew Clark</li>
//         <li>Brian Vaughn</li>
//         <li>Dan Abramov</li>
//         <li>Flarnie Marchan</li>
//       </ul>
//     </div>
//   );
// };

class ContactList extends Component{
  constructor(){
    super();
    this.contacts = ["Andrew Clark", "Brian Vaughn", "Dan Abramov", "Flarnie Marchan"];
  }
  render(){
    return(
      <div className="ContactList" data-testid="contact-list">
        <p>Contacts</p>
        {this.contacts.map((contact) => 
          <ul key={contact}>
            <li>{contact}</li>
          </ul>)}
      </div>
    );
  };
}

export default ContactList;
