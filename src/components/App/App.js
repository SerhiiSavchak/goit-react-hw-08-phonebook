import { ContactForm } from 'components/ContactForm/ContactForm';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList } from 'redux/selectors';
import { getContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" element={<ContactForm />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };
