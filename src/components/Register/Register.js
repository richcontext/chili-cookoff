import { useState, useContext } from 'preact/hooks';
import ContentLayout from '../ContentLayout/ContentLayout';
import TextInput from './TextInput/TextInput';
import styles from './Register.css';
import CheckBox from './CheckBox/CheckBox';
import Rating from '../Rating/Rating';
import icons from '../../theme/icons';
import FirebaseContext from '../../context/Firebase';

const Register = () => {
  const db = useContext(FirebaseContext).firestore();
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [chiliName, setChiliName] = useState('');
  const [isVeg, setIsVeg] = useState(false);
  const [spiceLevel, setSpiceLevel] = useState(1);

  const onSubmit = evt => {
    evt.preventDefault();
    setSubmitting(true);

    if (validateForm(name, chiliName, isVeg, spiceLevel)) {
      return db
        .collection('entrants')
        .add({
          name,
          chiliName,
          isVeg,
          spiceLevel,
          createdTs: Date.now()
        })
        .then(() => {
          setSubmitting(false);
          setName('');
          setChiliName('');
          setIsVeg(false);
          setSpiceLevel(1);

          console.info('Successfully added to Firebase');
        })
        .catch(err => {
          console.error('Error when submitting data to Firebase', err);

          setSubmitting(false);
          // handle error
        });
    }
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
          width={30}
        />
        <button class={styles.button} role="submit" disabled={submitting || !name || !chiliName}>
          Sign me up, Mister
        </button>
      </form>
    </ContentLayout>
  );
};

function validateForm(...values) {
  return values.every(value => {
    const type = typeof value;

    switch (type) {
      case 'string':
        return value.length > 0;
      case 'number':
        return value > 0 && value <= 5;
      case 'boolean':
        return true;
      default:
        return false;
    }
  });
}

export default Register;
