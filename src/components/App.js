import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {Container} from './App.styled';

function App() {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };
    if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}

export default App;