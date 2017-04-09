import { combineReducers } from 'redux';

import carDetailReducer from './car_detail_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  carDetail: carDetailReducer,
  searchParams: searchReducer
});

export default rootReducer;
