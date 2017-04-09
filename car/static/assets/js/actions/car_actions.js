import * as CarAPIUtil from '../util/car_api_util';

export const RECEIVE_CAR = 'RECEIVE_CAR';

export const receiveCar = car => ({
  type: RECEIVE_CAR,
  car
});

export const fetchCar = id => dispatch => (
  CarAPIUtil.fetchCars({id}).then(res => dispatch(receiveCar(res[0])))
);
