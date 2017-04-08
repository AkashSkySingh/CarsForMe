import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Root from './components/root';
import configureStore from './store/store';

import { fetchCar } from './util/car_api_util';

window.fetchCar = fetchCar;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
