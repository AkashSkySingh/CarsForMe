import * as CarAPIUtil from '../util/car_api_util';

export const RECEIVE_CAR = 'RECEIVE_CAR';
export const RECEIVE_CARS = 'RECEIVE_CARS';

export const receiveCar = car => ({
  type: RECEIVE_CAR,
  car
});

export const receiveCars = cars => ({
  type: RECEIVE_CARS,
  cars
});

export const fetchCar = id => dispatch => (
  CarAPIUtil.fetchCar(id).then(res => dispatch(receiveCar(res[0])))
);

export const fetchCars = data => dispatch => (
  CarAPIUtil.fetchCars(data).then(res => dispatch(receiveCars(res)))
);
