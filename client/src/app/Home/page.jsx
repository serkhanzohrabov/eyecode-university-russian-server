import React from "react";
import style from '../../styles/global.module.scss'
import Link from "next/link";
import '@/app/global.css'
import AnimatedCube from "@/shared/ui/animations/animated-cube/animated-cube";
import Footer from "@/Components/sections/Footer/Footer";
import Consult from "@/widgets/consult/ui/Consult";
import Techs from "@/Components/sections/Techs/Techs";
import AnimatedTitle from "@/shared/ui/animations/animated-title/animated-title";
import Avatar from "@/shared/ui/Avatar/avatar";
import { Birthday } from "@/widgets/birthday";
import { Support } from "@/widgets/support";
import { UniversityInfo } from "@/widgets/university-info";

const Home = ()=> {
   

    
return(<>
    <main className={style.home}>
      
      <AnimatedCube/>
 
     

      <AnimatedTitle/>   

            <Link href={'https://wa.me/79283526584'}>
                <button className={style.home_button}>Начать обучение</button>
            </Link>
        
        <div className={style.home_avatars}>
          
              <Avatar w={40} h={40} src={'/rh-robo.png'}/>
              <Avatar w={50} h={50} src={'/er.png'}/>
              <Avatar w={40} h={40} src={'/gh-robo.png'}/>
                    
        </div>
      
         <div className={style.home_subheading}>
            Рады видеть вас в международной школе <br /> айти технологий и computer science.
        </div>
      
    </main>
    
       
        <Birthday/>
        <Techs/>
        <UniversityInfo/>
        <Support/>
        <Consult/>
        <Footer/>
    

   

    </>
 
)
       
}


export default Home;
