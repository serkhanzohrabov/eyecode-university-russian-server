import styles from './style.module.css';

export default function AnimatedTitle() {
  return (
  <div className={styles.animatedtitle}>
      
     <div>
        <span className={styles.animatedtitle_left}>EYE</span>
        <span className={styles.animatedtitle_center}>C</span>
        <span className={styles.animatedtitle_right}>ODE </span>
      </div>

        <p className={styles.animatedtitle_sup}>University</p>
     </div>
  );
}
