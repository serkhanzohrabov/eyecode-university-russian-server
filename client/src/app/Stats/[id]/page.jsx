
import styles from '@/styles/global.module.scss';
import { StatsCard } from '@/widgets/stats-card';
import { findStudentById } from '@/entities/student';
export default async function StudentId(props) {
  const params = await props.params;


  const {id} = params;

  let student =  findStudentById(id);
  console.log(student)


  return(

    <div className={styles.student_id_page}>
          
            <StatsCard {...student}/>
    </div>

  
  )
}