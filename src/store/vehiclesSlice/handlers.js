export const handleFetchVehicles = ( state, {payload}) => {
state.items = payload;
state.isLoading = false;
}

export const handleGetVehicleById = ( state, { payload: { id } }) => {
    state.items = state.items.filter(
        vehicle => vehicle.id === id
      );
    state.isLoading = false;
    }

export const handleLoadMoreVisible = (state, {payload}) => {
        state.loadMoreVisible = payload;
      };

export   const handleAppendVehicles = (state, action) => {
        state.items.push(...action.payload);
      };
    
export const handlePending = state => {
        state.isLoading = true;
        state.error = '';
      };


export const handleRejected = (state, {payload}) => {
    state.error = payload.error;
    state.isLoading = false;
};