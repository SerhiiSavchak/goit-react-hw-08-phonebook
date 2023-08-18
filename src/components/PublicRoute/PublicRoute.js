import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export function PublicRoute({ component: Component, redirectedTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{!isLoggedIn ? <Component /> : <Navigate to={redirectedTo} />}</>;
}
