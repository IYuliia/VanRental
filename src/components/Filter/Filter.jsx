import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <div>
      <p className={styles.label}>Filters</p>
      <h2 className={styles.heading}>Vehicle equipment</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>AC</li>
        <li className={styles.li}>Automatic</li>
        <li className={styles.li}>Kitchen</li>
        <li className={styles.li}>TV</li>
        <li className={styles.li}>Shower/WC</li>
      </ul>
      <h2 className={styles.heading}>Vehicle type</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>Van</li>
        <li className={styles.li}>Fully intergrated</li>
        <li className={styles.li}>Alcove</li>
      </ul>
    </div>
  );
};

export default Filter;
