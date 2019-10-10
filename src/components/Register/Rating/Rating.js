import Icon from '../../Icon/Icon';
import styles from './Rating.css';

const Rating = ({ label, value = 0, icon, ...props }) => {
  return (
    <div class={styles.layout}>
      <p class={styles.label}>{label}</p>
      {renderRating(value, icon, props)}
    </div>
  );
};

function renderRating(value, icon, props) {
  const possibleValues = Array.from({ length: 5 }, (_, k) => k + 1);

  return possibleValues.map((_, index) => {
    const iconProps = {
      icon,
      color: index + 1 <= value ? '#3a4b5c' : '#AFB8C1'
    };

    return (
      <div class={styles.icon} onClick={() => props.onClick(index + 1)}>
        <Icon {...iconProps} {...props} />
      </div>
    );
  });
}

export default Rating;
