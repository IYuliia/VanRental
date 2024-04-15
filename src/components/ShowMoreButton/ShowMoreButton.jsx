import React from 'react';
import styles from './ShowMoreButton.module.css';

const ShowMoreButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Show More
    </button>
  );
};

export default ShowMoreButton;
