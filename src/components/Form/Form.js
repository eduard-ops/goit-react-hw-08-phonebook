import s from './Form.module.css';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { toast } from 'react-toastify';

import { useGetContactsQuery } from 'redux/contacts/contactsRtkSlice';

import { BootstrapInput as Input } from 'UI/stylesUi';

import { CssLabel as Label } from 'UI/stylesUi';

import { ButtonContacts as AddButton } from 'UI/stylesUi';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  const cheakAddContact = name => {
    const isValidate = contacts.find(item => item.name === name);
    isValidate &&
      toast.info(`${name} is already in contacts ⚠`, { theme: 'colored' });
    return isValidate;
  };

  const handleSubmut = e => {
    e.preventDefault();
    const isValidate = cheakAddContact(name);
    resetForm();
    if (isValidate) return;
    onSubmit({ name, number });
    resetForm();
  };

  const inspectInpusts = () => {
    if (name.trim() === '' || number.trim() === '') return true;
  };

  return (
    <form onSubmit={handleSubmut} className={s.form}>
      <Label shrink htmlFor="bootstrap-input">
        Name
      </Label>
      <Input
        id="bootstrap-input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <Label shrink htmlFor="bootstrap-input">
        Phone
      </Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
      />
      <AddButton disabled={inspectInpusts()} variant="contained" type="submit">
        Add contact
      </AddButton>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
