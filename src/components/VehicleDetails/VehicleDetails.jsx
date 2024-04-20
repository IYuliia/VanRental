// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVehicleByIdThunk } from '../../store/vehiclesSlice/thunks';
// import { setSelectedVehicle } from '../../store/vehiclesSlice/slice';

// const VehicleDetails = ({ vehicleId }) => {
//   const dispatch = useDispatch();
//   const vehicle = useSelector(state => state.vehicles.selectedVehicle);

//   useEffect(() => {
//     dispatch(getVehicleByIdThunk(vehicleId));
//     return () => {
//       dispatch(setSelectedVehicle(null));
//     };
//   }, [dispatch, vehicleId]);

//   if (!vehicle) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h3>{vehicle.name}</h3>
//       <p>Price: €{vehicle.price}</p>
//       <p>Rating: {vehicle.rating}</p>
//     </div>
//   );
// };

// export default VehicleDetails;

