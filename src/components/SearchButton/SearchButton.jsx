import React from 'react';
import styles from './SearchButton.module.css';

const SearchButton = ({ onClick }) => {
  
  return (
    <button className={styles.button} onClick={onClick}>
      Search
    </button>
  );
};

export default SearchButton;
