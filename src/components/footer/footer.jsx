import styles from '../../css/footer.module.css'


export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.logoBig} />
                <div className={styles.contacts}>
                    <h4 className={styles.title}>Контакты</h4>
                    <p>+7 (812) 123-45-67</p>
                    <p>+7 (812) 123-45-67</p>
                    <p>Новоостровский проспект, дом 36 лит. С</p>
                </div>
                <div className={styles.operatingMode}>
                    <h4 className={styles.title}>Режим работы</h4>
                    <p>C 10:00 до 21:00 (Пн-Пт)</p>
                    <p>С 11:00 до 20:00 (Сб-Вс)</p>
                </div>
                <div className={styles.ourInst}>
                    <h4 className={styles.title}>Мы в Instagram</h4>
                    <div className={styles.instBig} />
                </div>
            </div>
            <div className={styles.copirightBlock}>
                <p className={styles.copiright}>Copyright © 2017 - 2022</p>
            </div>
        </>
    )
}