import css from './Layout.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0px 36px;
`;

function Layout() {
  return (
    <>
      <header className={css.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <Outlet />
    </>
  );
}

export { Layout };
