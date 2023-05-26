

import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getItem = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(getItem);
    if (parseContacts) {
      setContacts(parseContacts); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (text) => {
      setFilter( text );
  };

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

 
  const deleteContact = (contactName) => {
        setContacts((prevContacts) => 
    prevContacts.filter(contact => contact.name !== contactName),
  );
};
 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter onChangeF={handleFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onSubmit={deleteContact}
      />
    </div>
  );
}
