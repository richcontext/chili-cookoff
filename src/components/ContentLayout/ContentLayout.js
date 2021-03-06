import { forwardRef } from 'preact/compat';
import Divider from '../Divider/Divider';
import styles from './ContentLayout.css';

const ContentLayout = forwardRef(({ title, children, hideDivider }, ref) => (
  <section ref={ref} class={styles.layout}>
    <a id={`${title.toLowerCase()}`} class={styles.anchor} />
    <div class={styles.content}>
      <h2 class={styles.title}>{title}</h2>
      {children}
    </div>
    {!hideDivider && <Divider />}
  </section>
));

export default ContentLayout;
