import firebase from 'firebase/app';
import { createContext } from 'preact';

const FirebaseContext = createContext(initFirebase());

export const FirebaseProvider = FirebaseContext.Provider;

function initFirebase() {
  return firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    databaseURL: process.env.FIREBASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  });
}

export default FirebaseContext;
