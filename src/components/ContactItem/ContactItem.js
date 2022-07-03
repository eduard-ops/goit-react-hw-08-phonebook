import s from './ContactItem.module.css';

import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contacts/contactsRtkSlice';

import { ButtonCss as ButtonDelete } from 'UI/stylesUi';

export default function ContactItem({ id, name, phone }) {
  const [deleteContact, res] = useDeleteContactMutation();

  return (
    <>
      <li className={s.item}>
        <p>
          {name}: {phone}
        </p>
        <ButtonDelete
          type="button"
          onClick={() => deleteContact(id)}
          disabled={res.isLoading}
        >
          Удалить
        </ButtonDelete>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
