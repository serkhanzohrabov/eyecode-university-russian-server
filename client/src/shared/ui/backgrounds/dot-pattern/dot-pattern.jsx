import styles from "./DotPatternBackground.module.css"

export default function DotPatternBackground({ children, className = "" }) {
  return (
    <div className={`${styles.dotPatternContainer} ${className}`}>
      <div className={styles.dotPattern}></div>
      <div className={styles.fadeMask}></div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
