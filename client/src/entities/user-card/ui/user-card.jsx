'use client'
import styles from '@/styles/global.module.scss';
import { UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BasicGauges from '@/shared/ui/charts/Gauge/Gauge';
import Badge from '@/shared/ui/status-badge/status-badge';
const UserCard = ({name,status,id,percent,student_id}) => {
    
   const router = useRouter();



     const showStats = () => {
       const studentId =student_id.replace('#','');

       router.push(`./Stats/${studentId}`)

     
      }

    return(
     
         <tr  onClick={showStats} className={styles.card} >
              <td>  
                 <UserRound color='blue'/>
              
              </td>
            

        
              <td><div className={styles.card_name}>{name}</div></td>
      
              <td><BasicGauges percent={percent}/></td>

              <td>
                  <Badge status={status}/>
              </td>

             <td>
                 <button type="button" className={styles.card_btn}>
                   Info
                 </button>
             </td>


         </tr>


    )
}


export default UserCard;