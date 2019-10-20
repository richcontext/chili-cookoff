import Divider from '../Divider/Divider';
import styles from './ContentLayout.css';

const ContentLayout = ({ title, children, hideDivider }) => (
  <section class={styles.layout}>
    <div class={styles.content}>
      <h2 class={styles.title}>{title}</h2>
      {children}
    </div>
    {!hideDivider && <Divider />}
  </section>
);

export default ContentLayout;
