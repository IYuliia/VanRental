import React, { useState } from 'react';
import styles from './Location.module.css';
import { ReactComponent as GreyPinIcon } from '../../icons/pin_grey.svg';
import { ReactComponent as BlackPinIcon } from '../../icons/pin_black.svg';

const Location = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="location">
        Location
      </label>
      <div className={styles.inputContainer}>
      {isInputFocused ? <BlackPinIcon className={styles.pinIcon} /> : <GreyPinIcon className={styles.pinIcon} />}
      <input
        className={styles.input}
        type="text"
        id="location"
        placeholder="City"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      </div>
    </div>
  );
};

export default Location;
