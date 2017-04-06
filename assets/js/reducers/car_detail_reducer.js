import merge from 'lodash/merge';

import { RECEIVE_CAR } from '../actions/car_actions';

const carDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CAR:
      return merge({}, action.car);
    default:
      return state;
  }
};

export default carDetailReducer;
