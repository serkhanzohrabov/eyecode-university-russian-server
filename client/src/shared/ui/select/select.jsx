import styles  from './style.module.css';

const Select = () => {
    return (
        <select className={styles.select}>
            <option value="option1" defaultValue>Apple</option>
            <option value="option2">Android</option>
            <option value="option3">WEB</option>
            <option value="option4">Дизайн</option>
            <option value="option4">Игры</option>
        </select>
    );
}


export default Select;