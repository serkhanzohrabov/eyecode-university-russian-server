'use client'
import {setTotalCalc } from '../lib/utils/helpers';
import style from '../styles/stats-card.module.scss';
import InfoBox from '@/shared/ui/stats-info-box/InfoBox';
import Flag from 'react-world-flags';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import  { Sparkles,Fingerprint } from 'lucide-react';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import Avvvatars from 'avvvatars-react';
import Schedule from '@/shared/ui/schedule/schedule';
import Image from 'next/image';
import AttendanceHeatmap from '@/shared/ui/charts/AttendanceHeatmap/AttendanceHeatmap';

const StatsCard = (props) => {

    const  {country,name,student_id,missed,percent,english,creativity,schedule,team,social_medias,email,  attendance} = props;
    const total = setTotalCalc(creativity * 10,percent,english * 10);
    console.log('ШЕДУЛЬ',team)
    const Gauge = dynamic(() => import('@/shared/ui/charts/Gauge/Gauge'), { ssr: false,loading: Skeleton });
    const RadarChart = dynamic(() => import('@/shared/ui/charts/Radar/Chart'), { ssr: false,loading: Skeleton }); 

    return(
        
        <div className={style.stats_card}>
   
            <div className={style.stats_card_info}>
                
                <div className={style.stats_card_info_account}>
                   
                    <div className={style.stats_card_info_account_name}>                               
                                    <div className={style.stats_card_info_account_name_main} >
                                        
                                    
                               
                                    <Avvvatars outline='' value={name}   style="character" displayValue={name.split(' ').map(w=>w[0]).join('')}/>   
                            
                                    <div className={style.stats_card_info_id}>
                                        <p> {name}</p>
                                        <span></span>{email}
                                    </div> 
                                
                                
                                    </div> 
                    </div>

                            
                    <div className={style.stats_card_info_account_info}>
                        <div className={style.stats_card_info_account_info_ea}>
                             <Fingerprint color='blue' size={16} />
                              <span>Student ID: {student_id}</span>
                        </div>  


                        <div className={style.stats_card_info_account_info_team}>
                             <Avvvatars size={24} value={team} style="shape" /> <span>{team}</span>
                        </div> 

                       <ul className={style.stats_card_info_account_info_sm}>
                           <li> <Image src={'/github-mark.png'} width={26} height={26} alt='github-link' /> <Link href={social_medias.github}>{social_medias.github}</Link> </li>
                       </ul>

                       
                       
                    </div>
                                
                </div>
            
                
                <div className={style.stats_card_info_details}>
                    <h2>Задание недели</h2>
                    <div className={style.stats_card_info_details_total}>
                        <div><span className='bold'> {total} </span><sup>/ 100</sup> </div>
                        ОЦЕНКА
                        <Gauge w={100} h={100} fz={16} color='#1dc3bf' percent={total} />
                    </div>

                </div>

                <div className={style.stats_card_info_monthly}>
                        <div className='black-badge'>Октябрь</div>

                        <div className={style.stats_card_info_monthly_links}>
                            <InfoBox title="УСПЕВАЕМОСТЬ" cases={percent}/>
                            <InfoBox title="ПРОПУЩЕНО" cases={missed}/>
                            <InfoBox title="КРЕАТИВНОСТЬ" cases={creativity}/>
                            <InfoBox title="АНГЛИЙСКИЙ" cases={english}/>
                        </div>

                </div>

            
    
            
            
            </div>

            <div className={style.stats_card_analyze}>
                    
                    <div className={style.stats_card_analyze_chart}>
                        <h2>Показатели</h2>
                        <RadarChart
                            name={name}
                            creativity={creativity}
                            english={english}
                            codeQuantity={missed}
                            total={total}
                            percent={percent}
                        />
                    </div>

                    <div className={style.stats_card_analyze_info}>
                       <div className={style.stats_card_analyze_info_schedule}>
                         <h2>Расписание</h2>
                         <div className={style.stats_card_analyze_info_schedule_items}>
                            {schedule.map((item,index) => {
                                return <Schedule key={index} data={item}/>
                            })}
                                
                         </div>
                        </div>    
                       <div className={style.stats_card_analyze_info_streak}>
                            <h2>Страйк</h2>
 
                             <div className={style.stats_card_analyze_info_streak_items}>
                                <AttendanceHeatmap data={attendance} />
                             </div>
                           
                        </div>    
                    </div>

                    <div className={style.stats_card_analyze_achievement}>
                        <h2>Достижения</h2>
                        <div className={style.stats_card_analyze_achievement_items}>
                            Здесь будут достижения
                        </div>
                    </div>

                </div> 


    </div>
    )
}

export default StatsCard;