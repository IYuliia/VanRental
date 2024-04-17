import VehicleDetails from '../../components/VehicleDetails/VehicleDetails';
import React from 'react';
import { useState, useEffect } from 'react';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const removeFavourite = (vehicleId) => {
    const updatedFavourites = favourites.filter((id) => id !== vehicleId);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <h2>Favourite Vehicles</h2>
      <ul>
        {favourites.map((vehicleId) => (
          <li key={vehicleId}>

            <VehicleDetails vehicleId={vehicleId} />
           
            <button onClick={() => removeFavourite(vehicleId)}>Remove from Favourites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;