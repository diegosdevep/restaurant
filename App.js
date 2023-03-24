import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/routes/AppNavigation';
import { initFirebase } from './src/firebase/firebase';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />
    </>
  );
}
