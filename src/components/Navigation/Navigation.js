import css from './Navigation.module.css';
import { getIsLoggedIn, getName } from 'redux/selectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  transition: color 250 linear;
  &:hover {
    color: white;
  }
`;

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getName);

  const onLogOutClick = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <nav className={css.nav}>
      <ul className={css.navList} fontWeight="medium" fontSize="sm">
        <li className={css.navItem}>
          <StyledLink className={css.navLink} to="/">
            Home
          </StyledLink>
        </li>

        <li className={css.navItem}>
          <StyledLink className={css.navLink} to="/contacts">
            Contacts
          </StyledLink>
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className={css.navList} fontWeight="medium" fontSize="sm">
          <li className={css.navItem}>
            <StyledLink className={css.navLink} to="/login">
              Log in
            </StyledLink>
          </li>
          <li className={css.navItem}>
            <StyledLink className={css.navLink} to="/register">
              Sign up
            </StyledLink>
          </li>
        </ul>
      ) : (
        <div className={css.navWrap}>
          <p className={css.navText}>{userName}</p>
          <Avatar className={css.navAvatar}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>

          <button className={css.navBtn} onClick={onLogOutClick} type="button">
            Log out
          </button>
        </div>
      )}
    </nav>
  );
}

export { Navigation };
