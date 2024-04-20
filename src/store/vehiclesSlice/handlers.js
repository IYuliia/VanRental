export const handleFetchVehicles = (state, { payload }) => {
  return {
    ...state,
    items: payload,
    isLoading: false,
  };
};

export const handleGetVehicleById = (state, { payload: { id } }) => {
  return {
    ...state,
    items: state.items.filter(vehicle => vehicle._id === id),
    isLoading: false,
  };
};

export const handleLoadMoreVisible = (state, { payload }) => {
  return {
    ...state,
    loadMoreVisible: payload,
  };
};

export const handleAppendVehicles = (state, { payload }) => {
  return {
    ...state,
    items: [...state.items, ...payload],
  };
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
