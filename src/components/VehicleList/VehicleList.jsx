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
      <h1>Vehicle List</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>{vehicle.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
