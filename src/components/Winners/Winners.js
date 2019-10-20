import { useContext, useState, useEffect } from 'preact/hooks';
import { formatQueryResults } from '../../utils/format-query';
import FirebaseContext from '../../context/Firebase';
import ContentLayout from '../ContentLayout/ContentLayout';
import Medal from './Medal/Medal';
import styles from './Winners.css';

const Winners = () => {
  const db = useContext(FirebaseContext).firestore();
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    db.collection('winners')
      .get()
      .then(({ docs }) => setWinners(formatQueryResults(docs)))
      .catch(console.warn);
  }, []);

  return (
    <ContentLayout title="Winners" hideDivider>
      {renderWinners(winners)}
    </ContentLayout>
  );
};

function renderWinners(winners) {
  if (!winners) {
    return null;
  }

  const medalColors = {
    1: '#FFD95C',
    2: '#EDEDED',
    3: '#BD965C'
  };

  const placeholders = [
    { place: 3, name: '———— ————' },
    { place: 2, name: '———— ————' },
    { place: 1, name: '———— ————' }
  ];

  const winnersList = winners.length > 0 ? winners : placeholders;

  return winnersList
    .slice()
    .sort((a, b) => a.place - b.place)
    .map(winner => (
      <div class={styles.winnerLayout}>
        <Medal width="60px" color={medalColors[winner.place]} />
        <h2 class={styles.winnerName}>{winner.name}</h2>
      </div>
    ));
}

export default Winners;
