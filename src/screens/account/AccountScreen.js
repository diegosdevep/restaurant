import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import UserLoggedScreen from './UserLoggedScreen';
import UserGuestScreen from './userGuest/UserGuestScreen';
import Loading from '../../components/shared/loading/Loading';

const AccountScreen = () => {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  if (hasLogged === null) return <Loading show text='Loading' />;

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export default AccountScreen;
