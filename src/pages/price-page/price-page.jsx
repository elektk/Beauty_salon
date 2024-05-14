import styles from '../../css/price-page.module.css';
import { useState, useEffect } from 'react';

export default function Price() {
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/price/get-list')
      .then((res) => res.json())
      .then((data) => setPriceList(data));
  }, []);

  const renderPrice = (price) => (
    <div className={styles.price} key={price.id}>
      <div className={styles.text}>
        <p>{price.title}</p>
        <button>+ обработка кончинков волос</button>
      </div>
      <p className={styles.value}>{price.price} ₽</p>
    </div>
  );

  return (
    <>
      <div className={styles.title}>
        <h2>Цены на услуги</h2>
      </div>
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.master} />
          <div className={styles.righhtBlock}>
            {priceList.slice(0, 4).map((price, index) => (
              <div key={index}>{renderPrice(price)}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.reverse}>
            {priceList.slice(4, 8).map((price, index) => (
              <div key={index}>{renderPrice(price)}</div>
            ))}
          </div>
          <div className={styles.master} />
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.master} />
          <div className={styles.righhtBlock}>
            {priceList.slice(8, 12).map((price, index) => (
              <div key={index}>{renderPrice(price)}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}