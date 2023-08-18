import css from './Navigation.module.css';
import { getIsLoggedIn } from 'redux/selectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onLogOutClick = () => {
    console.log(isLoggedIn);

    dispatch(logOut());
    navigate('/login');
  };

  return (
    <nav className={css.nav}>
      <ul className={css.navList} fontWeight="medium" fontSize="sm">
        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
        </li>

        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className={css.navList} fontWeight="medium" fontSize="sm">
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/login">
              Log in
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/register">
              Sign up
            </NavLink>
          </li>
        </ul>
      ) : (
        <button onClick={onLogOutClick} type="button">
          Log out
        </button>
      )}
    </nav>
  );
}

export { Navigation };
