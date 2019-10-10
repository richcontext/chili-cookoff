import styles from './TextInput.css';

const TextInput = ({ placeholder, value, onChange }) => (
  <input
    class={styles.input}
    type="text"
    value={value}
    placeholder={placeholder}
    onInput={onChange}
  />
);

export default TextInput;
