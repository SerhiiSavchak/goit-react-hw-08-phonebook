import css from './Layout.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}

export { Layout };
