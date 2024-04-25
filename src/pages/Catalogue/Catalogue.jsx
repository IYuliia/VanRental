import Location from '../../components/Location/Location';
import React from 'react';
import VehicleList from '../../components/VehicleList/VehicleList';
import Filter from '../../components/Filter/Filter';
import SearchButton from '../../components/SearchButton/SearchButton';
import styles from './Catalogue.module.css';

const Catalogue = () => {
  
  return (
    <div className={styles.catalogueContainer}>
      <div className={styles.leftColumn}>
        <Location />
        <Filter />
        <SearchButton />
      </div>
      <div className={styles.rightColumn}>
        <VehicleList />
      </div>
    </div>
  );
};

export default Catalogue;
