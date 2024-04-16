import ContactForm from '../../components/Form/Form';
import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ vehicle }) => {
  return (
    <div className={`reviews ${styles.container}`}>
      <div className={styles.leftColumn}>
        <ul>
          {vehicle.reviews.map((review, index) => (
            <li key={index} className={styles.reviewItem}>
              <div className={styles.reviewTop}>
                <div
                  className={styles.avatar}
                  data-initial={review.reviewer_name.charAt(0)}
                ></div>

                <div className={styles.avatarInfo}>
                  <p className={styles.name}>{review.reviewer_name}</p>
                  <p>{review.reviewer_rating}</p>
                </div>
              </div>
              <p className={styles.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Reviews;
