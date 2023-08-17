import css from './Navigation.module.css';
import { getIsLoggedIn } from 'redux/selectors';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onLogOutClick = () => {
    dispatch(logOut());
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
