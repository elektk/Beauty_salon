import styles from '../../css/main-page.module.css'


export default function MainPage() {
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.salon}>Салон красоты «Delote-Beauty» на Крестовском</h1>
            </div>
            <div className={styles.about}>
                <h2><svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0513 36.5714C26.1538 36.5714 29.4017 37.8546 31.7949 40.4211C34.359 42.8271 35.6411 46.0351 35.6411 50.0451C35.6411 54.3759 34.1026 57.8246 31.0257 60.391C28.1197 62.797 24.1026 64 18.9744 64C12.9915 64 8.29064 61.8346 4.87183 57.5038C1.62397 53.1729 0 46.9975 0 38.9774C0 31.7594 1.70941 25.1028 5.12821 19.0075C8.54702 12.7519 13.6752 6.49623 20.5129 0.240597C20.6838 0.0801979 20.9402 0 21.282 0C21.7949 0 22.2222 0.2406 22.5641 0.721797C22.906 1.203 22.906 1.604 22.5641 1.9248C14.188 9.94485 9.99999 19.4085 9.99999 30.3158C9.99999 34.807 10.8547 38.0952 12.5641 40.1805C14.1026 37.7744 17.265 36.5714 22.0513 36.5714ZM66.4103 36.5714C70.5128 36.5714 73.7607 37.8546 76.1538 40.4211C78.7179 42.8271 80 46.0351 80 50.0451C80 54.3759 78.4615 57.8246 75.3846 60.391C72.4786 62.797 68.4616 64 63.3334 64C57.3505 64 52.6496 61.8346 49.2308 57.5038C45.9829 53.1729 44.359 46.9975 44.359 38.9774C44.359 31.7594 46.0684 25.1028 49.4872 19.0075C52.906 12.7519 58.0342 6.49623 64.8718 0.240597C65.0427 0.0801979 65.2992 0 65.641 0C66.1539 0 66.5812 0.2406 66.9231 0.721797C67.265 1.203 67.265 1.604 66.9231 1.9248C58.547 9.94485 54.359 19.4085 54.359 30.3158C54.359 34.807 55.2137 38.0952 56.9231 40.1805C58.4616 37.7744 61.624 36.5714 66.4103 36.5714Z" fill="white" />
                </svg>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.
                </p>
                <p>Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</p>
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
                    <div className={styles.cosmetology} />
                    <div className={styles.esthetician} />
                    <div className={styles.hairdressing} />
                    <div className={styles.makeUp} />
                    <div className={styles.manicure} />
                    <div className={styles.pedicure} />
                </div>
                <div className={styles.signatures}>
                    <p>Косметология</p>
                    <p>Эстетист по телу</p>
                    <p>Парикмахерские услуги</p>
                    <p>Визаж</p>
                    <p>Маникюр</p>
                    <p>Педикюр</p>
                </div>
            </div>
            <div className={styles.brands}>
                <div className={styles.cosmetics} />
            </div>
            <div className={styles.works}>
                <h3>Наши работы</h3>
                <div className={styles.links}>
                    <button>Показать все</button>
                    <button>Парикмахерские услуги</button>
                    <button>Маникюр</button>
                    <button>Педикюр</button>
                </div>
                <div className={styles.photoWorks}>
                    <div className={styles.work1} />
                    <div className={styles.work2} />
                    <div className={styles.work3} />
                    <div className={styles.work4} />
                    <div className={styles.work5} />
                    <div className={styles.work6} />
                    <div className={styles.work7} />
                    <div className={styles.work8} />
                    <div className={styles.work9} />
                </div>
            </div>
        </>
    )
}