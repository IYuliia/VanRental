import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVehiclesByLocation } from '../../api/vehicles.js';
// import { appendVehicles, setLoadMoreVisible } from '../vehiclesSlice/slice';

export const fetchVehiclesByLocationThunk = createAsyncThunk(
  'filter/fetchVehiclesByLocation',
  async (location, thunkAPI) => {
    try {
      const data = await fetchVehiclesByLocation(location);
    //   thunkAPI.dispatch(appendVehicles(data));
    //   thunkAPI.dispatch(setLoadMoreVisible(data.length > 4));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
