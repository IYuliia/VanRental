import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchVehiclesByLocationThunk } from '../../store/filterSlice/thunks';
import styles from './SearchButton.module.css';

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchVehiclesByLocationThunk()); 
  };

  return (
    <button className={styles.button} onClick={handleSearch}>
      Search
    </button>
  );
};

export default SearchButton;
