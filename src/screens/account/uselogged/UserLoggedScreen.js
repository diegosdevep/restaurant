import { View, Text } from 'react-native';
import React, { useState } from 'react';
import InfoUser from '../../../components/Account/InfoUser';
import { Button } from 'react-native-elements';
import { styles } from './userlogged.styles';
import { getAuth, signOut } from 'firebase/auth';
import Loading from '../../../components/shared/loading/Loading';
import AccountOptions from '../../../components/Account/AccountOptions';

const UserLoggedScreen = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions />

      <Button
        title='Logout'
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        onPress={logout}
      />
      <Loading show={loading} text={loadingText} />
    </View>
  );
};

export default UserLoggedScreen;
