import { useState } from 'react';

import { Input } from '../../UI/stylesUi';

import Button from '@mui/material/Button';

import s from './RegisterPage.module.css';

import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth/auth-operations';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const hundleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password, name }));
    setEmail('');
    setPassword('');
    setName('');
  };

  const inspectInpusts = () => {
    if (email.trim() === '' || password.trim() === '') return true;
  };

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <h1 className={s.text}>Registration</h1>
        <form onSubmit={hundleSubmit} className={s.form} autoComplete="off">
          <Input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            label="Name"
            variant="filled"
          />
          <Input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            label="Email"
            variant="filled"
          />
          <Input
            value={password}
            name="password"
            type="password"
            onChange={handleChange}
            label="Password"
            variant="filled"
          />
          <Button disabled={inspectInpusts()} type="submit" variant="contained">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
