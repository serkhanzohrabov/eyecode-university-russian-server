import style from '../../styles/global.module.scss';
import { Usercard } from '@/entities/user-card';
import { result_data } from '@/data/students'




 const  Stats = () => {



    return(
            <section className={style.stats}>

        
                
        
                
                <div className={style.stats_title}>Анализ.Статистика.Код</div>
               
                    
                <table className={style.stats_table}>
                 <thead>
                     <tr><td>user</td><td>Ф.И.О</td><td>Прогресс</td><td>Статус</td><td>Результаты</td></tr>
                 </thead>     
                 <tbody>
                    {result_data.map( n => {
                            return <Usercard  key={n.id} {...n} />
                         
                        })}
                 </tbody>
                  
                </table>

            </section>
        
    )

}


export default Stats;