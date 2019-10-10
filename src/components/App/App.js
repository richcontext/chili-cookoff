import { Fragment } from 'preact';
import Quote from '../Quote/Quote';
import Nav from '../Nav/Nav';
import Rules from '../Rules/Rules';
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
      <Footer />
    </Fragment>
  );
};

export default App;
