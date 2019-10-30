require('firebase/firestore');
import { Fragment } from 'preact';
import firebase from 'firebase/app';
import { useState, useRef, useEffect } from 'preact/hooks';
import Quote from '../Quote/Quote';
import Nav from '../Nav/Nav';
import Rules from '../Rules/Rules';
import { FirebaseProvider } from '../../context/Firebase';
import DownArrow from './DownArrow/DownArrow';
import Register from '../Register/Register';
import Entrants from '../Entrants/Entrants';
import Winners from '../Winners/Winners';
import Divider from '../Divider/Divider';
import Footer from '../Footer/Footer';
import logo from '../../assets/logo.svg';
import styles from './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('Top');
  const [showArrow, setShowArrow] = useState(false);
  const sectionRef = useRef(activeSection);
  const rulesRef = useRef(null);
  const registerRef = useRef(null);
  const entrantsRef = useRef(null);
  const winnersRef = useRef(null);

  const onScroll = () => {
    const { scrollTop, offsetHeight, scrollHeight } = document.body;
    const rulesTop = calcSectionStart(rulesRef);
    const registerTop = calcSectionStart(registerRef);
    const entrantsTop = calcSectionStart(entrantsRef);
    const winnersTop = calcSectionStart(winnersRef);
    const isBottomOfPage = scrollTop + offsetHeight >= scrollHeight;

    setShowArrow(false);

    switch (true) {
      case scrollTop < rulesTop && sectionRef.current !== 'Top':
        return setActiveSection('Top');

      case scrollTop >= rulesTop && scrollTop < registerTop && sectionRef.current !== 'Rules':
        return setActiveSection('Rules');

      case scrollTop >= registerTop && scrollTop < entrantsTop && sectionRef.current !== 'Register':
        return setActiveSection('Register');

      case scrollTop >= entrantsTop && scrollTop < winnersTop && sectionRef.current !== 'Entrants':
        return setActiveSection('Entrants');

      case (scrollTop >= winnersTop || isBottomOfPage) && sectionRef.current !== 'Winners':
        return setActiveSection('Winners');

      default:
        return null;
    }
  };

  useEffect(() => {
    return setTimeout(() => {
      return setShowArrow(true);
    }, 6000);
  }, []);

  useEffect(() => {
    sectionRef.current = activeSection;
    document.body.addEventListener('scroll', onScroll);
  }, [activeSection]);

  return (
    <Fragment>
      <Nav
        setSection={setActiveSection}
        activeSection={activeSection}
        scrollToTop={() => document.body.scrollTo(0, 0)}
      />
      <DownArrow show={showArrow} />
      <FirebaseProvider value={firebase}>
        <main class={styles.app}>
          <img src={logo} alt="Chili Cook-Off Logo - a pot of peppers" />
          <h1>October 29, 2019</h1>
          <Quote />
          <Divider />
          <Rules ref={rulesRef} />
          <Register ref={registerRef} />
          <Entrants ref={entrantsRef} />
          <Winners ref={winnersRef} />
        </main>
      </FirebaseProvider>
      <Footer />
    </Fragment>
  );
};

function calcSectionStart(ref) {
  const DIVIDER_HEIGHT = 64;
  const MARGINS = 32;

  return ref.current.offsetTop - DIVIDER_HEIGHT - MARGINS;
}

export default App;
