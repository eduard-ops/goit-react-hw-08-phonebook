import Form from '../../components/Form';

import Contacts from '../../components/Contacts';

import Filter from '../../components/Filter';

import { useState, useMemo } from 'react';

import { useAddContactMutation } from '../../redux/contacts/contactsRtkSlice';

import { useGetContactsQuery } from '../../redux/contacts/contactsRtkSlice';

import s from './ContactsPage.module.css';

export default function ContactsPage() {
  const [addContact] = useAddContactMutation();
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const createContact = async user => {
    await addContact(user);
  };
  const filterContacts = useMemo(() => {
    return (
      contacts?.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <div className={s.wrap}>
      <h1>Phonebook</h1>
      <Form onSubmit={createContact} />
      <Filter value={filter} onChange={setFilter} />
      <Contacts item={filterContacts} />
    </div>
  );
}
