import merge from 'lodash/merge';

import { RECEIVE_CARS } from '../actions/car_actions';

const carListReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CARS:
      return merge({}, action.cars);
    default:
      return state;
  }
};

export default carListReducer;
