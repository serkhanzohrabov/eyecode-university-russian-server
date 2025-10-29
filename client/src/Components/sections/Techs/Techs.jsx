import style from '@/styles/global.module.scss';
import Image from 'next/image';
import Select from '@/shared/ui/select/select';
import Link from 'next/link';

const Techs = () => {
    return (
        <>

        <section className={style.techs}>
            
            <div className={style.techs_title}>
                <h2>Чему я научусь ?</h2>
                <p> Создание приложений любого уровня. </p>

                <div className={style.techs_select}>
                    <p>Выберите свое направление</p>
                    <Select/>
                </div>
             
            </div>
            
   

           <div className={style.techs_cards}>
             
                <div className={style.techs_card_apple}>
                    <h3>Разработка под <span>IOS</span></h3>
                    
                    <p> Все мы любим Яблоко.</p>
                    <div className={style.techs_card_apple_design}>
                        <Image
                        src={'/apple.svg'}
                        width={60}
                        height={60}
                        alt='apple'
                        />
                    </div>
                </div>

                <div className={style.techs_card_android}>
                    <h3>Разработка под</h3>
                    <div className={style.techs_card_android_design}>
                       ANDROID
                    </div>
                    <p> Зеленый робот уже здесь.</p>
                    
                </div>

                <div className={style.techs_card_ai}>
                    <div className={style.techs_card_ai_design}>
                        <Image
                            src={'/apple-intelligence-seeklogo.png'}
                            width={60}
                            height={60}
                            alt='ai'
                         />
                    </div>
                    <h3>Интеграция  искусственного интеллекта.</h3>
                   
                </div>
               
               <div className={style.techs_card_web}>
                   <h2>WEB</h2>
                   <p>Разработка</p>
               
               </div>
           </div>

            <div className={style.techs_footer}>
                <p className={style.techs_footer_title}>
                    Более подробно о технологиях можно узнать перейдя по ссылке ниже.
                    <Link href={'/Docs'}>Узнать подробно &#8250; </Link>
                </p>
            </div>
          
        </section>
       
        </>
    )
}


export default Techs;