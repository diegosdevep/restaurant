// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBFV8SySYAbVAg02cwXoo7UMMM-mw_MIHc',
  authDomain: 'restaurant-bc915.firebaseapp.com',
  projectId: 'restaurant-bc915',
  storageBucket: 'restaurant-bc915.appspot.com',
  messagingSenderId: '827770712740',
  appId: '1:827770712740:web:cbf8742c34a825f20d2c31',
};

export const initFirebase = initializeApp(firebaseConfig);
