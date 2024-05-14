import styles from '../../css/price-page.module.css'
import { useState, useEffect } from 'react'


export default function Price() {
    const [priceList, setPriceList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/price/get-list')
            .then((res) => res.json())
            .then((data) => setPriceList(data))
    }, [])
    useEffect(() => {
    }, [priceList])
    return (
        <>
            <div className={styles.title}>
                <h2>Цены на услуги</h2>
            </div>
            <div className={styles.services}>
                <div className={styles.content}>
                    <div className={styles.master} />
                    <div className={styles.righhtBlock}>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[0].id}>
                                        {priceList[0].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[0].id}>
                                    {priceList[0].price} ₽
                                </p>
                            )}
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[1].id}>
                                        {priceList[1].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[1].id}>
                                    {priceList[1].price} ₽
                                </p>
                            )}
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[2].id}>
                                        {priceList[2].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[2].id}>
                                    {priceList[2].price} ₽
                                </p>
                            )}
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[3].id}>
                                        {priceList[3].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[3].id}>
                                    {priceList[3].price} ₽
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.content}>
                    <div className={styles.reverse}>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[4].id}>
                                        {priceList[4].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[4].id}>
                                    {priceList[4].price} ₽
                                </p>
                            )}
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[5].id}>
                                        {priceList[5].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[5].id}>
                                    {priceList[5].price} ₽
                                </p>
                            )}
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[6].id}>
                                        {priceList[6].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[6].id}>
                                    {priceList[6].price} ₽
                                </p>
                            )}
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                {priceList.length > 0 && (
                                    <p key={priceList[7].id}>
                                        {priceList[7].title}
                                    </p>
                                )}
                                <button>+ обработка кончинков волос</button>
                            </div>
                            {priceList.length > 0 && (
                                <p className={styles.value} key={priceList[7].id}>
                                    {priceList[7].price} ₽
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={styles.master} />
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.content}>
                    <div className={styles.master} />
                    <div className={styles.righhtBlock}>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                <p>Женская укладка</p>
                                <button>+ обработка кончинков волос</button>
                            </div>
                            <p className={styles.value}>1 000 ₽</p>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                <p>Женская укладка</p>
                                <button>+ обработка кончинков волос</button>
                            </div>
                            <p className={styles.value}>1 000 ₽</p>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                <p>Женская укладка</p>
                                <button>+ обработка кончинков волос</button>
                            </div>
                            <p className={styles.value}>1 000 ₽</p>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.text}>
                                <p>Женская укладка</p>
                                <button>+ обработка кончинков волос</button>
                            </div>
                            <p className={styles.value}>1 000 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}