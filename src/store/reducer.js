import { vehiclesReducer } from './vehiclesSlice/slice';
import { filterReducer } from './filterSlice/slice';

export const reducer = {
  vehicles: vehiclesReducer,
  filter: filterReducer,
};