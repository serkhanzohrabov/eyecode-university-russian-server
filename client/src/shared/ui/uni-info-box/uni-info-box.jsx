import style from './style.module.css';
import Image from 'next/image';
export default function  UniInfoBox({title,subtitle,icon,count}) {


    return(
        <>
         <div className={style.uni_info_box}>
            <h2> {title}
                {icon?  <Image
                  src={icon}
                  width={90}
                  height={90}
                  alt='victory'
                 />:''} 
                
                  </h2>
            <p>{subtitle}</p>
         </div>
        </>
    )
}