import css from './Login.module.css';
import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Container } from 'components/Layout/Layout';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  const inputValue = e => {
    const key = e.target.name;
    const value = e.target.value;

    switch (key) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <section className={css.loginSection}>
        <form onSubmit={onFormSubmit} className={css.loginForm}>
          <label className={css.loginLabel}>
            Email:
            <Input
              onChange={inputValue}
              value={email}
              name="email"
              size="medium"
              width="300px"
              type=" text"
            />
          </label>
          <label className={css.loginLabel}>
            Password:
            <Input
              name="password"
              onChange={inputValue}
              value={password}
              size="medium"
              width="300px"
              type=" text"
            />
          </label>
          <Button
            width="300px"
            colorScheme="linear-gradient(to right, #00b4db, #0083b0);"
            height="40px"
            type="submit"
          >
            Log in
          </Button>
        </form>
      </section>
    </Container>
  );
}

export { Login };
