import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export function PrivateRoute({
  component: Component,
  redirectedTo = '/login',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <Component /> : <Navigate to={redirectedTo} />}</>;
}
