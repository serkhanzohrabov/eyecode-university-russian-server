'use client'
import styles from './style.module.css'

const AnimatedCube = () => {


  return (
  
          
              <div className={styles.cube}>
                <div className={`${styles.face} ${styles.front}`}  />
                <div className={`${styles.face} ${styles.back}`}   />
                <div className={`${styles.face} ${styles.left}`}   />
                <div className={`${styles.face} ${styles.right}`}  />
                <div className={`${styles.face} ${styles.top}`}    />
                <div className={`${styles.face} ${styles.bottom}`} />
              </div>
            
          )
        }

  


export default AnimatedCube;
