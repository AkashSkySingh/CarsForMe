import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SplashContainer from './splash/splash_container';
import CarDetailContainer from './car_detail/car_detail_container';
import CarListContainer from './car_list/car_list_container';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ SplashContainer } />
          <Route path="/carlist" component={ CarListContainer } />
          <Route path="/cars/:carId" component={ CarDetailContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
