import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div>
      <label className={styles.label} htmlFor="location">
        Location
      </label>
      <input
        className={styles.input}
        type="text"
        id="location"
        placeholder="Kyiv, Ukraine"
      />
    </div>
  );
};

export default Location;
