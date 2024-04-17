import React from 'react';
import styles from './Reviews.module.css';
import ContactForm from '../../components/Form/Form';
import { ReactComponent as GreyStarIcon } from '../../icons/star_grey.svg';
import { ReactComponent as YellowStarIcon } from '../../icons/star_yellow.svg';

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
                  <div className={styles.starRating}>
                  {[...Array(5)].map((_, i) => (
                      i < review.reviewer_rating ? <YellowStarIcon key={i} /> : <GreyStarIcon key={i} />
                    ))}
                  </div>
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

