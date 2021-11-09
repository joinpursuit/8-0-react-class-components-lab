import "./ContactList.css";
import {Component} from "react";

class ContactList extends Component{

  render(){
  return (
    <div className="ContactList" data-testid="contact-list">
      <p>Contacts</p>
      <ul>
        <li>Andrew Clark</li>
        <li>Brian Vaughn</li>
        <li>Dan Abramov</li>
        <li>Flarnie Marchan</li>
      </ul>
    </div>
  );
  }
};

export default ContactList;
