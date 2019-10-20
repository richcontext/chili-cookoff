require('firebase/firestore');
import { Fragment } from 'preact';
import { useState } from 'preact/hooks';
import firebase from 'firebase/app';
import Quote from '../Quote/Quote';
import Nav from '../Nav/Nav';
import Rules from '../Rules/Rules';
import { FirebaseProvider } from '../../context/Firebase';
import Register from '../Register/Register';
import Entrants from '../Entrants/Entrants';
import Winners from '../Winners/Winners';
import Divider from '../Divider/Divider';
import Footer from '../Footer/Footer';
import logo from '../../assets/logo.svg';
import styles from './App.css';

const App = () => {
  return (
    <Fragment>
      {/* <Nav /> */}
      <FirebaseProvider value={initFirebase()}>
        <main class={styles.app}>
          <img src={logo} alt="Chili Cook-Off Logo - a pot of peppers" />
          <h1>October 29, 2019</h1>
          <Quote />
          <Divider />
          <Rules />
          <Register />
          <Entrants />
          <Winners />
        </main>
      </FirebaseProvider>
      <Footer />
    </Fragment>
  );
};

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

export default App;
