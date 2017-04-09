import { combineReducers } from 'redux';

import carDetailReducer from './car_detail_reducer';
import carListReducer from './car_list_reducer';

const rootReducer = combineReducers({
  carDetail: carDetailReducer,
  carList: carListReducer
});

export default rootReducer;
