import css from './Home.module.css';

import { Container } from 'components/Layout/Layout';
function Home() {
  return (
    <Container>
      <section className={css.homeSection}>
        <h1 className={css.homeTitle}>Create your own contacts book!</h1>
      </section>
    </Container>
  );
}

export { Home };
