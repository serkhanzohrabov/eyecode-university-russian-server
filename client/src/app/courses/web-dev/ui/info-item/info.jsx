import style  from './style.module.css';

const InfoItem = ({title,subtitle,icon}) => {

    return(

                <div className={style.info_item}>
                     <h6>   {icon} {title}</h6>
                     <p>    {subtitle}</p>
                </div>

    )    
    
}

export default InfoItem;