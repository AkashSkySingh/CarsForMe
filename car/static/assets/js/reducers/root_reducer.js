import { combineReducers } from 'redux';

import carDetailReducer from './car_detail_reducer';

import carListReducer from './car_list_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  carDetail: carDetailReducer,
  searchParams: searchReducer,
  carList: carListReducer
});

export default rootReducer;
