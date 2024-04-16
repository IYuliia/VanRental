import React from 'react';
import styles from './Location.module.css';
import { ReactComponent as PinIcon } from '../../icons/pin.svg';

const Location = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="location">
        Location
      </label>
      <div className={styles.inputContainer}>
      <PinIcon className={styles.pinIcon} />
      <input
        className={styles.input}
        type="text"
        id="location"
        placeholder="City"
      />
      </div>
    </div>
  );
};

export default Location;
