import axios from 'axios';

const instanceVehicles = axios.create({
  baseURL: 'https://661cf9f2e7b95ad7fa6bbf57.mockapi.io/',
});

export const fetchVehiclesApi = async () => {
  const { data } = await instanceVehicles.get('vehicles');
  return data;
};


export const getVehicleById = async vehicleId => {
  try {
    const { data } = await instanceVehicles.get(`vehicles/${vehicleId}`);
    return data;
  } catch (error) {
    throw error; 
  }
};

export const fetchVehiclesByLocation = async (location) => {
  const { data } = await instanceVehicles.get('vehicles', {
    params: { location },
  });
  return data;
};

