import React from "react";
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

class ContactList extends React.Component{
  //render is a built in method that returns JSX from our component, without the render a class will not be able to return anything. 
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
}

export default ContactList;
