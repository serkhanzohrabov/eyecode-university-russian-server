'use client'
import style from '@/styles/global.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import SignInButton from '@/shared/ui/sign-in-button/sign-in-button';
import { Gift, X,Sparkle,BookMarked} from 'lucide-react';
import { useState } from 'react';
import Modal from '@/shared/ui/modal/modal';



const Header = () => {
 
 const [isActive, setActive] = useState(false);
 const [modal,    setModal] = useState(false);
 const forStudents = [
     {
       href:'/Stats',
       text:'Результаты недели'
     }
    ]

    return(
        <>
       
         <header className={style.header}>   
            
         <Link href={'/Home'}>
                   <div className={style.header_logo}>
                    . University
                   </div>
                   

                   </Link>


                <div className={style.header_info}>
                   <nav className={style.header_nav}>
                        <ul>
                            <li><Link href="/Stats">Студентам</Link></li>
                            <li><Link href="/Docs">Документы</Link></li>
                            <li><Link href="/Home#footer">Контакты</Link></li>
                            <li><Link href="/Events">События</Link></li>
                        </ul>


                   </nav>
                   
                   <button>
                    <Link href={'https://github.com/serkhanzohrabov'}> 
                    <Image
                     src={'/github-mark.png'}
                     width={30}
                     height={30}
                     alt='git-hub'
                    />
                    </Link>
                   </button>

                   
                          <SignInButton click={setModal} ><Gift size={16} /></SignInButton>   

                   <button 
                    onClick={()=>{
                    setActive(!isActive);
                   }} 
                    className={style.mobile}
                    aria-label="Close menu"
                     >
                   </button>
                </div>
              
         
         </header>

           {isActive?<header className={style.mobile_header}>
                    <button
                     className={style.mobile_header_close}
                     onClick={()=>{
                    setActive(false);
                }}
                >
                        <X/>
                    </button>
                <nav className={style.mobile_header_nav}>
                  
                <ul onClick={()=>{
                    setActive(false);
                }}>
                            <li><Link href="/Home">Главная</Link></li>
                            <li><Link href="/Stats">Результаты студентов</Link></li>
                            <li><Link href="/Docs">Документы</Link></li>
                            <li><Link href="/Home#footer">Контакты</Link></li>
                            <li><Link href="/Events">События</Link></li>
                            <li><Link href="https://vk.com/eyecodeuniversity">Мы в ВК <Sparkle color='greenyellow' size={16} /></Link></li>
                            <li><Link href="https://t.me/eyecodematerial">Полезные материалы  <BookMarked color='greenyellow' size={16} /></Link></li>
                            <li><Link href="https://wa.me/79283526584">Бесплатный урок <Gift color='cyan' size={16} /></Link></li>

                </ul>
                </nav>
            
            </header>:''}

            <Modal isOpen={modal} onClose={setModal} >
                
               
                <p>Данный раздел находится в разработке</p>
            </Modal>

         </>
         
        )
}

export default Header;