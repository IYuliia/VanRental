import ContactForm from '../../components/Form/Form';
import React from 'react';
import styles from './Features.module.css';

const Features = ({ vehicle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <ul className={styles.detailsList}>
          {Object.entries(vehicle.details)
            .filter(([key, value]) => value > 0)
            .map(([key, value]) => (
              <li className={styles.details} key={key}>
                {value === 1 ? key : `${key}: ${value}`}
              </li>
            ))}
        </ul>

        <h2 className={styles.heading}>Vehicle details</h2>
        <ul>
          <li className={styles.descr}>Form: {vehicle.form}</li>
          <li className={styles.descr}>Length: {vehicle.length}</li>
          <li className={styles.descr}>Width: {vehicle.width}</li>
          <li className={styles.descr}>Height: {vehicle.height}</li>
          <li className={styles.descr}>Tank: {vehicle.tank}</li>
          <li className={styles.descr}>Consumption: {vehicle.consumption}</li>
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Features;
