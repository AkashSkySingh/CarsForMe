import { combineReducers } from 'redux';

import carDetailReducer from './car_detail_reducer';

const rootReducer = combineReducers({
  carDetail: carDetailReducer,
});

export default rootReducer;
