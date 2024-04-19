import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchVehiclesApi,
  getVehicleById
} from '../../api/vehicles.js';
import { setLoadMoreVisible, appendVehicles } from './slice.js';

export const fetchVehiclesThunk = createAsyncThunk (
'vehicles/fetchAll',
async (_, thunkAPI) => {
    try {
        console.log('Fetching vehicles...');
        const data = await fetchVehiclesApi();
        thunkAPI.dispatch(appendVehicles(data));
        thunkAPI.dispatch(setLoadMoreVisible(data.length > 4));
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const getVehicleByIdThunk = createAsyncThunk (
    'vehicles/vehicleId',
    async (vehicleId, thunkAPI) => {
        try {
            const data = await getVehicleById(vehicleId);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)