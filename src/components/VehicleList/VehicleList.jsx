import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton';
import React, { useEffect, useState } from 'react';
import { fetchVehiclesApi } from '../../api/vehicles';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVehiclesApi();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <div>
              <img src={vehicle.image} alt={vehicle.name} />
              <h3>{vehicle.name}</h3>
              <p>Price: {vehicle.price}</p>
              <p>{vehicle.rating}</p>
              <p>Location: {vehicle.location}</p>
              <p>Description: {vehicle.description}</p>
              <ul>
                {Object.entries(vehicle.details).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
              <ShowMoreButton />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
