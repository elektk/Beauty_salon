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
    <div className={styles.price}>
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
          {priceList.map((price, index) => (
              index >= 0 && index < 4 && <div key={index}>{renderPrice(price)}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.reverse}>
          {priceList.map((price, index) => (
              index >= 4 && index < 8 && <div key={index}>{renderPrice(price)}</div>
            ))}
          </div>
          <div className={styles.master} />
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.master} />
          <div className={styles.righhtBlock}>
          {priceList.map((price, index) => (
              index >= 8 && index < 12 && <div key={index}>{renderPrice(price)}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}