import { Fragment } from 'preact';
import { forwardRef } from 'preact/compat';
import ContentLayout from '../ContentLayout/ContentLayout';
import styles from './Rules.css';

const Rules = forwardRef((props, ref) => {
  const rules = [
    {
      title: 'Who are the judges?',
      copy:
        'Judges will perform a blind taste test of all available chilis and vote on their favorite. The winners will be determined based on the aggregate of the judges’ votes.'
    },
    {
      title: 'Who can participate?',
      copy: 'Anyone that works at Rich Context.'
    },
    {
      title: 'What do the winners get?',
      copy:
        'First place - $50 Amazon Gift Card\nSecond place - $35 Amazon Gift Card\nThird place - $20 Amazon Gift Card\n\nEveryone - bragging rights until next year.'
    },
    {
      title: 'Is anything provided?',
      copy:
        'Bowls and utensils will be provided. However, if your chili is best served with Fritos, onions or cheese, please bring those yourself.'
    }
  ];

  return (
    <ContentLayout ref={ref} title="Rules">
      {renderRules(rules)}
    </ContentLayout>
  );
});

function renderRules(rules) {
  return rules.map(({ title, copy }) => (
    <Fragment>
      <h4 class={styles.title}>{title}</h4>
      <p class={styles.copy}>{copy}</p>
    </Fragment>
  ));
}

export default Rules;
