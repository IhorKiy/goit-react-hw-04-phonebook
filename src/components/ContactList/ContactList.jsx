import React, { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from 'components/ContactList/ContactList.module.css'

export class ContactList extends Component {

  
  
  handleSubmit = name => {
    
    this.props.onSubmit( name );
  };
  render() {
      const filteredContacts = this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul className={css.list}>
            {filteredContacts.map(contact => (
              <ContactItem
                key={contact.id}
                name={contact.name}
                number={contact.number}

                onSubmit={this.handleSubmit}
              />
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
export default ContactList;
