import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const { favourites, vehicles } = useSelector(state => state.vehicles);

  console.log('Favourites array:', favourites);
  console.log('Vehicles array:', vehicles);

  const favouriteVehicles = vehicles.filter(vehicle => favourites.includes(vehicle._id));

  return (
    <div>
      <h1>Favourite Vehicles</h1>
      <ul>
        {favouriteVehicles.map(vehicle => (
          <li key={vehicle._id}>
            <Link to={`/vehicle/${vehicle._id}`}>{vehicle.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;


