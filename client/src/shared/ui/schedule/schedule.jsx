import style from './style.module.css';



const Schedule = (props) => {
 
    const {data} = props;

    return (
        <div className={style.schedule}>
            <h2>{data.day}</h2>
             <p> 
                 <span>{data.time}</span>
             </p>
        </div>
    )
}

export default Schedule;