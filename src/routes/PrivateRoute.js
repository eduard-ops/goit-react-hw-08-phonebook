import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export function PrivateRoute({ redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLooggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
