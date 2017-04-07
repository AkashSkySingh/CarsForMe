import * as CarAPIUtil from '../util/car_api_util';

export const RECEIVE_CAR = 'RECEIVE_CAR';

export const receiveCar = car => ({
  type: RECEIVE_CAR,
  car
});

export const fetchCars = car => dispatch => (
  CarAPIUtil.fetchCars(car).then(res => dispatch(receiveCar(res)))
);
