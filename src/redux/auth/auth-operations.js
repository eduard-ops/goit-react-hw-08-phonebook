import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success('Welcome ✔', { theme: 'colored' });
    return data;
  } catch (error) {
    toast.info('This user is already registered ⚠', { theme: 'colored' });
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('Welcome ✔', { theme: 'colored' });
    return data;
  } catch (error) {
    toast.error('Wrong login or password ❗', { theme: 'colored' });
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);

export const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
