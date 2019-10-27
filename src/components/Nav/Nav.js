import { useState, useEffect } from 'preact/hooks';
import styles from './Nav.css';

const Option = ({ text, selected, onClick }) => (
  <li onClick={() => onClick(text)} class={styles.navOption}>
    <a
      class={selected === text && styles.active}
      href={text === 'Top' ? '#' : `#${text.toLowerCase()}`}
    >
      {text}
    </a>
  </li>
);

const Nav = ({ scrollToTop, activeSection, setSection }) => {
  const [loadNav, setLoadNav] = useState(false);
  const sections = ['Top', 'Rules', 'Register', 'Entrants', 'Winners'];
  const handleClick = section => {
    setSection(section);

    if (section === 'Top') {
      scrollToTop();
    }
  };

  useEffect(() => {
    setTimeout(() => setLoadNav(true), 1000);
  }, []);

  return (
    <nav class={loadNav ? styles.navShow : styles.navHidden}>
      <ul class={styles.navList}>{renderNavOptions(sections, activeSection, handleClick)}</ul>
    </nav>
  );
};

function renderNavOptions(options, selected, handleClick) {
  return options.map(option => <Option text={option} selected={selected} onClick={handleClick} />);
}

export default Nav;
