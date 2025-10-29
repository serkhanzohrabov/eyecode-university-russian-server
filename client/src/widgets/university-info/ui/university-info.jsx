import style from '../style/style.module.css';
import UniInfoBox from '@/shared/ui/uni-info-box/uni-info-box';

const UniversityInfo = ()=> {

    return(<>
       <section  className={style.university_info}>
             
            <div className={style.uni_info_box_wrapper}>
                   <UniInfoBox  title={'3+'} subtitle={'более 3 стран'}  />
                   <UniInfoBox title={'4.8'} icon={'/victory.png'} subtitle={'Средняя  оценка студентов зафиксированная во время анонимного опроса'}  />
                   <UniInfoBox title={'99%'} subtitle={'Довольных студентов'}  />
                </div> 
          
        

        </section>
    </>)
}

export default UniversityInfo;