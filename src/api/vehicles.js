import axios from 'axios';

const instanceVehicles = axios.create({
  baseURL: 'https://661cf9f2e7b95ad7fa6bbf57.mockapi.io/',
});

export const fetchVehiclesApi = async () => {
  const { data } = await instanceVehicles.get('vehicles');
  return data;
};

// export const getVehicleById = async vehicleId => {
//   const { data } = await instanceVehicles.get(`vehicles/${vehicleId}`);
//   return data;
// };

export const getVehicleById = async vehicleId => {
  try {
    const { data } = await instanceVehicles.get(`vehicles/${vehicleId}`);
    console.log('Vehicle details:', data); // Add this line to log the data
    return data;
  } catch (error) {
    console.error('Error fetching vehicle detail API:', error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

