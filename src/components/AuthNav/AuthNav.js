import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className="auth-nav">
      <NavLink className={s.link} to="registration">
        Registration
      </NavLink>
      <NavLink className={s.link} to="login">
        Login
      </NavLink>
    </nav>
  );
}
