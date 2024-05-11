import styles from '../../css/team-page.module.css'


export default function TeamPage() {
    return (
        <>
            <div className={styles.ourMasters}>
                <h2>Наши мастера</h2>
            </div>
            <div className={styles.services}>
                <div className={styles.rectangles}>
                    <div className={styles.rectangle} />
                    <div className={styles.rectangle} />
                    <div className={styles.rectangle} />
                    <div className={styles.rectangle} />
                    <div className={styles.rectangle} />
                    <div className={styles.rectangle} />
                </div>
                <div className={styles.content}>
                    <div className={styles.master1} />
                    <div className={styles.master2} />
                    <div className={styles.master3} />
                    <div className={styles.master4} />
                    <div className={styles.master5} />
                    <div className={styles.master6} />
                </div>
                <div className={styles.signatures}>
                    <p className={styles.nameMaster}>Елена Васильевна</p>
                    <p className={styles.nameMaster}>Елена Васильевна</p>
                    <p className={styles.nameMaster}>Елена Васильевна</p>
                    <p className={styles.nameMaster}>Елена Васильевна</p>
                    <p className={styles.nameMaster}>Елена Васильевна</p>
                    <p className={styles.nameMaster}>Елена Васильевна</p>
                </div>
                <div className={styles.signatures}>
                    <p className={styles.profession}>Визажист</p>
                    <p className={styles.profession}>Визажист</p>
                    <p className={styles.profession}>Визажист</p>
                    <p className={styles.profession}>Визажист</p>
                    <p className={styles.profession}>Визажист</p>
                    <p className={styles.profession}>Визажист</p>
                </div>
            </div>
        </>
    )
}