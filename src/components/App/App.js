import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoadingUser } from 'redux/selectors';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoadingUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute component={Register} redirectedTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={Login} redirectedTo="/contacts" />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectedTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export { App };
