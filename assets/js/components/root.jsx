import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SplashContainer from './splash/splash_container';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
          <IndexRoute component={ SplashContainer } />
      </Router>
    </Provider>
  );
};

export default Root;
