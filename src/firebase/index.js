// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_key,
  authDomain: 'docs-eab7c.firebaseapp.com',
  projectId: 'docs-eab7c',
  storageBucket: 'docs-eab7c.appspot.com',
  messagingSenderId: '416526714876',
  appId: '1:416526714876:web:a3b4a2434a167e71af5479',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
