import React, { useState } from 'react';

const ContactForm = ({ addContact, existingContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (existingContacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const nameId = 'name';
  const numberId = 'number';

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="name-label">
          Name
          <input
            type="text"
            name="name"
            id={nameId}
            pattern="^[a-zA-Zа-яА-Я\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={handleNameChange}
            autoComplete="name"
          />
        </label>
        <br />
        <label className="number-label">
          Number
          <input
            type="tel"
            name="number"
            id={numberId}
            pattern="^[0-9+]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
            autoComplete="tel"
          />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;