import { useContext, useEffect, useState } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import { formatQueryResults } from '../../utils/format-query';
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

const Entrants = forwardRef((props, ref) => {
  const db = useContext(FirebaseContext);
  const [entrants, setEntrants] = useState(null);

  useEffect(() => {
    db.firestore()
      .collection('entrants')
      .get()
      .then(({ docs }) => setEntrants(formatQueryResults(docs)))
      .catch(console.warn);

    db.firestore()
      .collection('entrants')
      .onSnapshot(({ docs }) => setEntrants(formatQueryResults(docs)));
  }, []);

  return (
    <ContentLayout ref={ref} title="Entrants">
      {renderEntrants(entrants)}
    </ContentLayout>
  );
});

function renderEntrants(entrants) {
  if (!entrants || entrants.length === 0) {
    return (
      <div class={styles.messageLayout}>
        <h3 class={styles.message}>No one has signed up yet. </h3>
        <Icon icon={icons.sadface} width={24} viewBox="0 0 496 512" color="#ff6a75" />
      </div>
    );
  }

  return entrants
    .slice()
    .sort((a, b) => a.createdTs - b.createdTs)
    .map((entrant, index) => {
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

export default Entrants;
