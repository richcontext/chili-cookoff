import { useState } from 'preact/hooks';
import ContentLayout from '../ContentLayout/ContentLayout';
import TextInput from './TextInput/TextInput';
import styles from './Register.css';
import CheckBox from './CheckBox/CheckBox';
import Rating from './Rating/Rating';
import icons from '../../theme/icons';

const Register = () => {
  const [name, setName] = useState('');
  const [chiliName, setChiliName] = useState('');
  const [isVeg, setIsVeg] = useState(false);
  const [spiceLevel, setSpiceLevel] = useState(1);

  const onSubmit = evt => {
    evt.preventDefault();
    console.log('form submitted');
  };

  return (
    <ContentLayout title="Register">
      <form onSubmit={onSubmit} class={styles.form}>
        <TextInput
          placeholder="Your Name"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        <TextInput
          placeholder="Your Chili's Name"
          value={chiliName}
          onChange={evt => setChiliName(evt.target.value)}
        />
        <CheckBox label="Vegan / Vegetarian" checked={isVeg} onClick={() => setIsVeg(!isVeg)} />
        <Rating
          label="Spice Level:"
          value={spiceLevel}
          icon={icons.pepper}
          viewBox="0 0 512 512"
          onClick={setSpiceLevel}
        />
        <button class={styles.button} role="submit">
          Sign me up, Mister
        </button>
      </form>
    </ContentLayout>
  );
};

export default Register;
