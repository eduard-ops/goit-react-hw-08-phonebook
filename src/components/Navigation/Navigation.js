import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLooggedIn);
  return (
    <>
      {isLoggedIn && (
        <nav>
          <NavLink className={s.link} to="contacts">
            Your Contacts
          </NavLink>
        </nav>
      )}
    </>
  );
}
