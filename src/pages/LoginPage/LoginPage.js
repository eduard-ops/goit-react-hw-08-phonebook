import { useState } from 'react';

import s from './LoginPage.module.css';

import { CssTextField as Input } from '../../UI/stylesUi';

import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth/auth-operations';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const hundleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const inspectInpusts = () => {
    if (email.trim() === '' || password.trim() === '') return true;
  };

  return (
    <div className={s.wrap}>
      <h1>Страница логина</h1>
      <form onSubmit={hundleSubmit} className={s.form} autoComplete="off">
        <Input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          label="email"
        />
        <Input
          type="password"
          value={password}
          name="password"
          label="password"
          onChange={handleChange}
        />
        <Button disabled={inspectInpusts()} type="submit" variant="contained">
          Sign in
        </Button>
      </form>
    </div>
  );
}
