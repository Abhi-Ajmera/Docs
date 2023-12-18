// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_key,
  authDomain: 'docs-8d285.firebaseapp.com',
  projectId: 'docs-8d285',
  storageBucket: 'docs-8d285.appspot.com',
  messagingSenderId: '181960502847',
  appId: '1:181960502847:web:fa425b97c95f7a69db928a',
  measurementId: 'G-Y32ZKFPFEW',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
