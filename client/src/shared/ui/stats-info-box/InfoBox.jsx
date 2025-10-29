import './style.css';
const StatsInfoBox = ({title,cases}) => {


        return(

            <div className='stats-info-box'>
                <div className="free"> {cases}{title =='УСПЕВАЕМОСТЬ'?'%':''}</div>
                <div className="stats-info-box-title">{title}</div>
            </div>

)

}


export default StatsInfoBox;