import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Root from './components/root';
import configureStore from './store/store';

import { fetchCars, fetchColValues } from './util/car_api_util';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
