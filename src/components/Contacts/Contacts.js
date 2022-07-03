import s from './Contacts.module.css';

import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem';

import { useGetContactsQuery } from 'redux/contacts/contactsRtkSlice';

import Loader from 'components/Loader';

const style = {
  minHeight: '0',
};

export default function Contacts({ item }) {
  const { isLoading } = useGetContactsQuery();

  return (
    <ul className={s.list}>
      {isLoading ? (
        <Loader style={style} />
      ) : (
        item.map(item => {
          return (
            <ContactItem
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.number}
            />
          );
        })
      )}
    </ul>
  );
}

Contacts.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
