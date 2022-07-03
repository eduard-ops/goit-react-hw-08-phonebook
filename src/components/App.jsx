import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../routes/PrivateRoute';

import PublicRoute from '../routes/PublicRoute';

import { authOperations } from 'redux/auth/auth-operations';

import authSelectors from 'redux/auth/auth-selectors';

import Container from './Container';

import Main from './Main';

import ContentWrap from './ContentWrap/ContentWrap';

import Loader from './Loader';

import AppBar from './AppBar';

import Footer from './Footer';

const HomePage = lazy(() => import('pages/HomePage'));

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
      <Container>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          pauseOnHover={false}
        />
        <ContentWrap>
          <AppBar />
          <Main>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route element={<PublicRoute redirectTo="/" />}>
                  <Route path="/" element={<HomePage />} />
                </Route>
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
      </Container>
    )
  );
}
