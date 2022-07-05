import AuthNav from 'components/AuthNav';

import Navigation from 'components/Navigation';

import s from './AppBar.module.css';

import UserMenu from 'components/UserMenu';

import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import Logo from 'components/Logo/Logo';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLooggedIn);
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
