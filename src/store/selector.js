export const selectVehicles = state => ({
    vehicles: state.vehicles.items,
    loadMoreVisible: state.vehicles.loadMoreVisible,
    visibleVehicles: state.vehicles.visibleVehicles,
    isLoading: state.vehicles.isLoading,
    showModal: state.vehicles.showModal,
    selectedVehicle: state.vehicles.selectedVehicle,
    favourites: state.vehicles.favourites
});


