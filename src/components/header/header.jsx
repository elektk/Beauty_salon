import { NavLink } from 'react-router-dom'
import styles from '../../css/header.module.css'


export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.inst}/>
                <NavLink className={({isActive})=> isActive ? 'active':''} to='/'>Главная</NavLink>
                <NavLink to='/team'>Мастера</NavLink>
                <NavLink to='/cosmetics'>Косметика</NavLink>
                <div className={styles.logo}/>
                <NavLink to='/price'>Акции</NavLink>
                <NavLink to='/reviews'>Отзывы</NavLink>
                <NavLink to='/contacts'>Контакты</NavLink>
                <div className={styles.burger}/>
            </div>
        </>
    )
}