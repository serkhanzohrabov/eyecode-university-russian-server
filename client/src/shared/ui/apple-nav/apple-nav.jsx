'use client'
import styles from "./style.module.css"
import { useState } from "react";
export default function Navigation(props) {
   
     
     const { nav_links=['Игры','Веб','Боты'],nav_items} = props;
     const [isActive,setIsActive] = useState(0);
     const content = [
         'Разработка игр используя такие технологии как Canvas,Phaser,React',
         'Разработка Веб приложений, разработка десктопных а также мобильных приложений',
         'Разработка ботов для телеграм,Вконтакте,Инстаграм',
     ];

    return (



       <>
    <nav className={styles.navigation}>

        {nav_links.map((_,index)=>{  
           return  <button 
                        key={index}
                        className={`${styles.navItem} ${ isActive == index ? styles.active:''}`}
                        onClick={()=>{
                            setIsActive(index);
                        }}
                        >
                             {_}
                        </button>
         })}
    </nav>
     
     <div className={styles.content}>
        {nav_items?nav_items[isActive]:content[isActive]}
     </div>
     
     
     
     </> 
  )
}
