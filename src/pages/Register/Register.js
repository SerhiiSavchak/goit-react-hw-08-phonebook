import css from './Register.module.css';
import { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Container } from 'components/Layout/Layout';

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const inputValue = e => {
    const key = e.target.name;
    const value = e.target.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
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
      <section className={css.registerSection}>
        <form onSubmit={onFormSubmit} className={css.registerForm}>
          <label className={css.registerLabel}>
            User name:
            <Input
              value={name}
              name="name"
              onChange={inputValue}
              className={css.registerInput}
              size="medium"
              width="300px"
              type=" text"
            />
          </label>
          <label className={css.registerLabel}>
            Email:
            <Input
              value={email}
              name="email"
              onChange={inputValue}
              size="medium"
              width="300px"
              type=" text"
            />
          </label>
          <label className={css.registerLabel}>
            Password:
            <Input
              value={password}
              name="password"
              onChange={inputValue}
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
            Register
          </Button>
        </form>
      </section>
    </Container>
  );
}

export { Register };
