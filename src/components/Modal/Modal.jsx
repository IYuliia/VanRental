import React, { useState } from 'react';
import styles from './Modal.module.css';
import Features from '../../components/Features/Features';
import Reviews from '../../components/Reviews/Reviews';
import { ReactComponent as StarIcon } from '../../icons/star_yellow.svg';
import { ReactComponent as LocationIcon } from '../../icons/map-pin.svg';

const Modal = ({ vehicle, onClose }) => {
  const [isFeaturesClicked, setIsFeaturesClicked] = useState(false);
  const [isReviewsClicked, setIsReviewsClicked] = useState(false);

  const handleFeaturesClick = () => {
    setIsFeaturesClicked(true);
    setIsReviewsClicked(false);
  };

  const handleReviewsClick = () => {
    setIsReviewsClicked(true);
    setIsFeaturesClicked(false);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2 className={styles.name}>{vehicle.name}</h2>
        <div className={styles.additional}>
                <StarIcon className={styles.starIcon} />
                  <p className={styles.rating}>{vehicle.rating}({vehicle.reviews.length} Reviews)</p>
                  <LocationIcon className={styles.locationIcon} />
                  <p className={styles.location}>{vehicle.location}</p>
                  
                </div>
        <p className={styles.price}>€{vehicle.price}</p>
        <ul className={styles.imgList}>
          {' '}
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
        <div className={styles.sectionToggle}>
          <button className={styles.heading} onClick={handleFeaturesClick}>
            Features
          </button>
          <button className={styles.heading} onClick={handleReviewsClick}>
            Reviews
          </button>
        </div>
        {isFeaturesClicked && <Features vehicle={vehicle} />}
        {isReviewsClicked && <Reviews vehicle={vehicle} />}
        <button onClick={onClose}>Close</button>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Modal;
