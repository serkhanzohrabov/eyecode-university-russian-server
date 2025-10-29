import style from '@/styles/global.module.scss';
import Container from '@/Components/organisms/Containers/container/Container';

import ClassicButton from '@/shared/ui/classic-button/classic-button';
import { Flame,Asterisk,Zap,HeartHandshake ,Baby,FlaskConical,Sparkle} from 'lucide-react';
import { Timer } from '@/features/timer';
import InfoItem from './ui/info-item/info';
import DotPatternBackground from '@/shared/ui/backgrounds/dot-pattern/dot-pattern';
import Navigation from '@/shared/ui/apple-nav/apple-nav';
import Component from '@/shared/ui/backgrounds/three-grid/landing-page';


const Webdev = () => {

   


    return(
        <>
        <Container>
          
          <section className={style.webdev}>
     
                 <header className={style.webdev_header}>
                     <p>Специалист по веб-разработке</p>
                     <h2>Разработчик-инженер <br /> <span className='primary'>Pro</span></h2>
                 </header>

                  <div className={style.webdev_intro}>
                         <Component/>  
                             
                    
                              <p className='heading-2'>Software <br /> Dev</p>
                              
                    </div>
                   <div className={style.webdev_timer}>
                          <ClassicButton>Записаться</ClassicButton>
                             <p className={style.webdev_price}>
                                7500 ₽ м/o  <sup> <del>9750 ₽</del></sup>
                              </p>
                              <Timer/>
                        </div>
                            
                         <div className={style.webdev_info}>

                          <InfoItem icon={<Zap color='blue' size={18} /> }  title={'Длительность'}             subtitle={'~296 a/часов'}/>
                          <InfoItem icon={<Flame color='blue' size={18} /> } title={'Яркое портфолио'}              subtitle={'10 проектов в Github '}/>
                          <InfoItem icon={<HeartHandshake  color='blue' size={18} /> } title={'Отдел заботы'} subtitle={'Поддержка 24/7 даже после завершения обучения'}/>
                          <InfoItem icon={<FlaskConical color='blue' size={18} /> } title={'Стажировка'}      subtitle={'Практика во время обучения каждую неделю'}/>
                              
                         </div>

                    


                   <div className={style.webdev_main}>
                  
                       <div className={style.webdev_desc}>
                              <DotPatternBackground>
                           <div className={style.webdev_desc_title}>   
                               Кто такой Software <br />Developer ?
                           </div>
                               </DotPatternBackground>
                              
                              <div className={style.webdev_desc_nav}>
                                 <Navigation/>
                              </div>
                              

                                
                       </div>
                   
                   </div>
          </section> 
            </Container>
        </>
    )
}


export default Webdev;