import Icon from '../../Icon/Icon';
import icons from '../../../theme/icons';
import styles from './CheckBox.css';

const CheckBox = ({ label, checked, onClick }) => {
  const icon = checked ? icons.checkmark : icons.emptyCheckmark;
  const color = checked ? '#78CC41' : '#3a4b5c';

  return (
    <div class={styles.layout} onClick={onClick}>
      <Icon icon={icon} color={color} />
      <p class={styles.label}>{label}</p>
    </div>
  );
};

export default CheckBox;
