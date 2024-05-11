import styles from '../../css/contact-page.module.css'
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Contacts() {
    return (
        <>
            <YMaps>
                <div className={styles.title}>
                    <h2>Контакты</h2>
                </div>
                <div className={styles.map}>
                    <Map
                        defaultState={{ center: [59.937362, 30.296645], zoom: 10 }}
                        width={1296}
                        height={576}
                    />
                </div>
                <div className={styles.cloneFooter}>
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
                </div>
            </YMaps>
        </>
    )
}