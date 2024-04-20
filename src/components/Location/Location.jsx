import React, { useState } from 'react';
import styles from './Location.module.css';
import { ReactComponent as GreyPinIcon } from '../../icons/pin_grey.svg';
import { ReactComponent as BlackPinIcon } from '../../icons/pin_black.svg';
// import { useDispatch } from 'react-redux';

const Location = () => {
  // const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // const handleSearch = () => {
  //   dispatch(setLocation(location)); 
  // };
  
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
        value={location} 
        onChange={handleLocationChange} 
      />
      </div>
    </div>
  );
};

export default Location;
