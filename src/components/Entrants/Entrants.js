import { useContext, useEffect, useState } from 'preact/hooks';
import ContentLayout from '../ContentLayout/ContentLayout';
import FirebaseContext from '../../context/Firebase';
import Rating from '../Rating/Rating';
import Icon from '../Icon/Icon';
import icons from '../../theme/icons';
import styles from './Entrants.css';

const CardDivider = () => <div class={styles.cardDivider} />;

const VegetarianIcon = ({ isVeg }) => {
  if (!isVeg) {
    return null;
  }

  return (
    <div class={styles.iconPadding}>
      <Icon viewBox="0 0 576 512" icon={icons.leaf} color="#78CC41" width={16} />
    </div>
  );
};

const Entrants = () => {
  const db = useContext(FirebaseContext).firestore();
  const [entrants, setEntrants] = useState([]);

  useEffect(() => {
    db.collection('entrants')
      .get()
      .then(({ docs }) => setEntrants(createEntrants(docs)))
      .catch(console.warn);
  }, []);

  return <ContentLayout title="Entrants">{renderEntrants(entrants)}</ContentLayout>;
};

function renderEntrants(entrants) {
  return entrants.map((entrant, index) => {
    const showBorder = index !== entrants.length - 1;

    return (
      <div class={styles.entrantCard}>
        <h3 class={styles.chiliName}>{entrant.chiliName}</h3>
        <p class={styles.chefName}>by {entrant.name}</p>
        <div class={styles.chiliInfoLayout}>
          <Rating
            value={entrant.spiceLevel}
            icon={icons.pepper}
            viewBox="0 0 512 512"
            width={16}
            color="#ff6a75"
          />
          <VegetarianIcon isVeg={entrant.isVeg} />
        </div>
        {showBorder && <CardDivider />}
      </div>
    );
  });
}

function createEntrants(queryResults) {
  return queryResults
    .map(document => ({
      id: document.id,
      ...document.data()
    }))
    .reverse();
}

export default Entrants;
