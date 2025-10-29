'use client'
import style from '../style/style.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { Gift} from 'lucide-react';
import { Timer } from '@/features/timer';
import { X } from 'lucide-react';
import { useState,useEffect } from 'react';
import ClassicForm from '@/shared/ui/form/form';

const CallBackModal = () => {


    const [isView, setIsView] = useState(false);
    const [formIsActive, setFormIsActive] = useState(false);

    const handleAction = () => {
            setFormIsActive(false);
            setIsView(false);
            alert('Скоро с вами свяжется наш менеджер :)')
    }
 
     
     useEffect(()=>{
        let timeout = setTimeout(()=>{
            setIsView(true)
            clearTimeout(timeout);
        },1000);
     },[])

    return(
        <>
 
    { isView?  
     <div className={style.callback_modal_wrapper}>
            
                <div className={style.callback_modal}> 
                     
                <button className={style.close} onClick={()=>{ setIsView(false) }}>
                    <X color='white'/>
                </button>

                 <Image
                  src={'/holo-flame.png'}
                  width={1024/5}
                  height={1536/5}
                  alt='holo'
                  priority
                 />
                 
                 <h2>3</h2>
                 <p className={style.title}>дневный мини-курс</p>
              
                 <div className={style.subtitle}>
                       <div>
                    <span className={style.hashtag}>#ИскусственныйИнтеллект</span> <span className={style.hashtag}>#РазработкаИгры</span> 
                   
                     </div>
                   
                 </div> 

                 <Timer/>

               <Link href={'#'}>
                        <button onClick={()=>{
                            setFormIsActive(true)
                            setIsView(false)
                        }} className={style.gift}>
                             Забрать подарок <Gift color='white'/>
                        </button>                  
               </Link>

                 </div>   
  
            </div>:null
    }  

    {formIsActive?<ClassicForm {...{setIsView,setFormIsActive,handleAction}}/>:null}      
          

        </>
    );


}
    


export default CallBackModal;