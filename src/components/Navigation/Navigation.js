import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLooggedIn);
  return (
    <nav className="navigation">
      {isLoggedIn && (
        <NavLink className={s.link} to="contacts">
          Contacts
        </NavLink>
      )}
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
    </nav>
  );
}
