import { createSlice } from '@reduxjs/toolkit';
import { fetchVehiclesThunk, getVehicleByIdThunk } from './thunks.js';
import { handleAppendVehicles, handleFetchVehicles, handleGetVehicleById, handleLoadMoreVisible, handlePending, handleRejected } from './handlers.js';

export const loadFavouritesFromLS = () => {
  const favouritesJSON = localStorage.getItem('favourites');
  return favouritesJSON ? JSON.parse(favouritesJSON) : [];
};

const initialState = {
  items: [],
  currentPage: 1,
  pageSize: 4,
  isLoading: false,
  error: null,
  selectedVehicle: null,
  showModal: false,
  vehicleDetails: null,
  favourites: [],
};

const vehiclesSlice = createSlice ({
    name: 'vehicles',
    initialState,
    reducers: {
      toggleFavourite: (state, action) => {
        const vehicleId = action.payload;
        const index = state.favourites.indexOf(vehicleId);
        if (index === -1) {
          state.favourites = [...state.favourites, vehicleId];
        } else {
          state.favourites = state.favourites.filter(id => id !== vehicleId);
        }
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
      },
     
      setLoadMoreVisible: (state, action) => {
        state.loadMoreVisible = action.payload;
      },
      setSelectedVehicle: (state, action) => {
        state.selectedVehicle = action.payload;
      },
      setShowModal: (state, action) => {
        state.showModal = action.payload;
      },
      setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
      appendVehicles: (state, action) => {
          state.items = action.payload;
        },
      setVehicleDetails: (state, action) => {
        state.vehicleDetails = action.payload;
      },
      initializeFavourites: (state, action) => {
        state.favourites = action.payload;
      },
},
extraReducers: builder => {
    builder
    .addCase(fetchVehiclesThunk.fulfilled, handleFetchVehicles)
    .addCase(getVehicleByIdThunk.fulfilled, handleGetVehicleById)
    .addCase(setLoadMoreVisible, handleLoadMoreVisible)
    .addCase(appendVehicles, handleAppendVehicles)
    .addMatcher(action => action.type.endsWith('pending'), handlePending)
    .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
},
});

export const vehiclesReducer = vehiclesSlice.reducer;

export const { toggleFavourite, initializeFavourites, setLoadMoreVisible, setSelectedVehicle, setShowModal, setCurrentPage, appendVehicles,  setVehicleDetails } = vehiclesSlice.actions;
