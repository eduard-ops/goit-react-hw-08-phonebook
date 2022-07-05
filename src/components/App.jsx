import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { PrivateRoute } from '../routes/PrivateRoute';

import PublicRoute from '../routes/PublicRoute';

import { authOperations } from 'redux/auth/auth-operations';

import authSelectors from 'redux/auth/auth-selectors';

import ContentWrap from './ContentWrap';

import Main from './Main';

import Loader from './Loader';

import AppBar from './AppBar';

import Footer from './Footer';

const RegisterPage = lazy(() => import('pages/RegisterPage'));

const LoginPage = lazy(() => import('pages/LoginPage'));

const ContactsPage = lazy(() => import('pages/ContactsPage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          pauseOnHover={false}
        />
        <AppBar />
        <ContentWrap>
          <Main>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Navigate to="login" />}></Route>
                <Route
                  element={<PublicRoute restricted redirectTo="contacts" />}
                >
                  <Route path="login" element={<LoginPage />} />
                </Route>
                <Route
                  element={<PublicRoute restricted redirectTo="contacts" />}
                >
                  <Route path="registration" element={<RegisterPage />} />
                </Route>
                <Route element={<PrivateRoute redirectTo="login" />}>
                  <Route path="contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />}></Route>
              </Routes>
            </Suspense>
          </Main>
        </ContentWrap>
        <Footer />
      </>
    )
  );
}
