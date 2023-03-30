// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFV8SySYAbVAg02cwXoo7UMMM-mw_MIHc',
  authDomain: 'restaurant-bc915.firebaseapp.com',
  projectId: 'restaurant-bc915',
  storageBucket: 'restaurant-bc915.appspot.com',
  messagingSenderId: '827770712740',
  appId: '1:827770712740:web:cbf8742c34a825f20d2c31',
};
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
