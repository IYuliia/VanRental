export const handleFetchVehiclesByLocation = (state, action) => {
    state.locationOptions = action.payload.locationOptions;
  };

  export const handlePending = state => {
    return {
      ...state,
      isLoading: true,
      error: '',
    };
  };
  
  export const handleRejected = (state, { payload }) => {
    return {
      ...state,
      error: payload.error,
      isLoading: false,
    };
  };