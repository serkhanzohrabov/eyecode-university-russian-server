import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { Crown } from 'lucide-react';
import Footer from '@/Components/sections/Footer/Footer';
import { event_teams } from '@/data/summer';
export default function Page() {

  
    return(

     <>

       <main className={style.page}>
             
             <div className={style.page_header}>
                <h6>Eyecode Battle <br /> <span className={style.special}> Summer Edition 2025 </span></h6>
             </div>

             <div className={style.page_board}>
                <h2>Victory Cup 2025</h2>
                <Image
                    src={'/eyecode_character.png'}
                    alt="Eyecode Character"
                    width={1024 / 4}
                    height={1536 /4}
                    className={style.page_board_image}
                />

                <div className={style.page_board_date}>
                    15.05.2025 - 15.06.2025
                </div>
             </div>

             <div className={style.page_rewards}>
                 <h2>Результаты </h2>

                 <table>
                    <thead>
                        <tr>
                            <td>#</td><td>Team</td><td>Leader</td><td>Score</td>
                        </tr>
                    </thead>

                    <tbody>
                           
                            
                            {event_teams.map((team,index)=>{
                        return(
                       
                           <tr key={index} >
                               <td>
                                 {team.pos==1?<Crown size={20} color="gold" />:team.pos==2?<Crown size={20}  color="silver" />:team.pos==3?<Crown size={20} color="cyan" />:<span>{team.pos}</span>}
                               </td>
                               <td> {team.name} </td>
                               <td> {team.leader} </td>
                               <td className={style.mod}>{team.score}</td>
                           </tr>
                        
                        )
                    })}

                         
                
                    </tbody>
                 </table>

             </div>

             <div className={style.page_nominations}>
                <h2>Номинации</h2>

            <div className={style.page_nominations_list}>
                  
               <div className={style.page_nominations_list_leader}>
                  <div >
                     <h3 >LEADER</h3>
                     <h3 className={style.font_subtitle}>LEADER</h3>
                     <h3>LEADER</h3>
                  </div>
                  <div className={style.page_nominations_list_leader_stats}>
                    <h4>Сергей А.</h4>
                    <p className={style.page_nominations_list_leader_stats_achievement}>
                       <span>Достижение: Лучший лидер 2025 Summer Edition получено.</span> 
                    </p>
                  </div>
               </div>
               
                <div className={style.page_nominations_list_leader}>
                  <div >
                     <h3 >DESIGNER</h3>
                     <h3 className={style.font_subtitle}>DESIGNER</h3>
                     <h3>DESIGNER</h3>
                  </div>
                  <div className={style.page_nominations_list_leader_stats}>
                    <h4>Алек Е.</h4>
                    <p className={style.page_nominations_list_leader_stats_achievement}>
                       <span>Достижение: Лучший дизайнер 2025 Summer Edition получено.</span> 
                    </p>
                  </div>
               </div>
              

               <div className={style.page_nominations_list_leader}>
                  <div >
                     <h3 >ENGINEER</h3>
                     <h3 className={style.font_subtitle}>ENGINEER</h3>
                     <h3>ENGINEER</h3>
                  </div>
                  <div className={style.page_nominations_list_leader_stats}>
                    <h4>Чингиз П.</h4>
                    <p className={style.page_nominations_list_leader_stats_achievement}>
                       <span>Достижение: Лучший инженер 2025 Summer Edition получено.</span> 
                    </p>
                  </div>
               </div>
              

            </div>

             </div>

          
            

       </main>

       <Footer/>

     </>


    )


}