import style from './style.module.css';

export default function Badge(props){
    const {status} = props;
    return(
        <div className={status?style.badge_true:style.badge_false}>
            <p> {status?'Выполнено':'Провалено'} </p>
            <div className={status?style.badge_lighthouse_true:style.badge_lighthouse_false}></div> 
        </div>
    )
}