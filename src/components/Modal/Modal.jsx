import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ vehicle, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2 className={styles.name}>{vehicle.name}</h2>
        <div className={styles.subheading}>
          <p className={styles.rating}>{vehicle.rating}</p>
          <p className={styles.location}>{vehicle.location}</p>
        </div>
        <p className={styles.price}>€{vehicle.price}</p>
        <ul className={styles.imgList}>
          <li className={styles.imgItem}>
            <img
              className={styles.img}
              src={vehicle.gallery[0]}
              alt={vehicle.name}
            />
          </li>
          <li className={styles.imgItem}>
            <img
              className={styles.img}
              src={vehicle.gallery[1]}
              alt={vehicle.name}
            />
          </li>
          <li className={styles.imgItem}>
            <img
              className={styles.img}
              src={vehicle.gallery[2]}
              alt={vehicle.name}
            />
          </li>
        </ul>
        <p className={styles.description}>{vehicle.description}</p>
        <h2 className={styles.heading}>Features</h2>
        <h2 className={styles.heading}>Reviews</h2>
        <button onClick={onClose}>Close</button>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Modal;
