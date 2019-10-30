import downArrow from '../../../assets/down-arrow.svg';
import styles from './DownArrow.css';

const DownArrow = ({ show }) => (
  <img
    src={downArrow}
    alt="Animated down arrow"
    class={show ? styles.downArrowShow : styles.downArrowHidden}
  />
);
export default DownArrow;
