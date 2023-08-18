import { useState } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList } from 'redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Input, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import {
  fetchContacts,
  addContact,
} from '../../redux/contacts/contactOperations';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = async (name, number) => {
    const allNames = contacts.map(contact => contact.name);
    const currentName = name;
    const currentNumber = number;
    if (!allNames.includes(currentName)) {
      await dispatch(
        addContact({
          name: currentName,
          number: currentNumber,
        })
      );
      dispatch(fetchContacts());
    } else {
      alert(`${currentName} already added!  `);
    }
  };

  const inputValue = evt => {
    const key = evt.target.name;
    const value = evt.target.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    const currentName = evt.target.elements.name.value;
    const currentNumber = evt.target.elements.number.value;
    addContacts(currentName, currentNumber);
    setName('');
    setNumber('');
  };

  return (
    <section className={css.phonebookSection}>
      <h2 className={css.phonebookTopTitle}>Phonebook</h2>
      <form className={css.phonebookForm} onSubmit={onSubmitForm}>
        <label className={css.phonebookLabel}>
          Name
          <Input
            width="100%"
            onChange={inputValue}
            className={css.phonebookInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.phonebookLabel}>
          Number
          <Input
            width="100%"
            value={number}
            onChange={inputValue}
            className={css.phonebookInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button
          colorScheme="linear-gradient(to right, #00b4db, #0083b0);"
          className={css.phonebookBtn}
          type="submit"
        >
          Add contact
        </Button>
      </form>
      <Filter />
      <ContactList />
    </section>
  );
}

export { ContactForm };
