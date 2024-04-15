import Location from '../../components/Location/Location';
import React from 'react';
import VehicleList from '../../components/VehicleList/VehicleList';
import Filter from '../../components/Filter/Filter';
import SearchButton from '../../components/SearchButton/SearchButton';

const Catalogue = () => {
  return (
    <div>
      <Location />
      <Filter />
      <SearchButton />
      <VehicleList />
    </div>
  );
};

export default Catalogue;
