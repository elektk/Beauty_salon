import styles from '../../css/header.module.css'


export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.inst}/>
                <a href='/'>Главная</a>
                <a href='/team'>Мастера</a>
                <a href='/'>Косметика</a>
                <div className={styles.logo}/>
                <a href='/price'>Акции</a>
                <a href='/'>Отзывы</a>
                <a href='/contacts'>Контакты</a>
                <div className={styles.burger}/>
            </div>
        </>
    )
}