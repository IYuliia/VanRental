import React, { useState, useEffect } from 'react';
import { getVehicleById } from '../../api/vehicles';

const VehicleDetails = ({ vehicleId }) => {
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVehicleById(vehicleId);
        setVehicle(data);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      }
    };

    fetchData();
  }, [vehicleId]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{vehicle.name}</h3>
      <p>Price: €{vehicle.price}</p>
      <p>Rating: {vehicle.rating}</p>
    </div>
  );
};

export default VehicleDetails;
