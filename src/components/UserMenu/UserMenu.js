import s from './UserMenu.module.css';

import { ButtonCss as Button } from 'UI/stylesUi';

import { ReactComponent as IconUser } from '../../images/user-icon.svg';

import { useSelector, useDispatch } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import { authOperations } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <div className={s.wrap}>
      <IconUser className={s.icon} />
      <span>Welcome, {userName}</span>
      <Button
        type="button"
        variant="outlined"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
