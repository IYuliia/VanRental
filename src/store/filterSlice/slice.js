import { createSlice } from '@reduxjs/toolkit';
import { handleFetchVehiclesByLocation, handlePending, handleRejected } from './handlers';
import { fetchVehiclesByLocationThunk } from './thunks';

const initialState = {
  location: '', 
  filteredVehicles: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setFilteredVehicles: (state, action) => {
      state.filteredVehicles = action.payload;
    },
},
    extraReducers: (builder) => {
        builder
        .addCase(fetchVehiclesByLocationThunk.fulfilled, handleFetchVehiclesByLocation)
        .addMatcher(action => action.type.endsWith('pending'), handlePending)
        .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const { setLocation, setFilteredVehicles } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
