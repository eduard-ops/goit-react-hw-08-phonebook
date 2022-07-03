import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export function PrivateRoute({ redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLooggedIn);
  const isUser = useSelector(authSelectors.getUsername);
  const inspect = isLoggedIn || isUser;
  return inspect ? <Outlet /> : <Navigate to={redirectTo} />;
}
