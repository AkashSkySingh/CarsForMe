import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';

const Root = () => {

  return (
      <Router history={ hashHistory }>
          <Route path="/" component={ App } />
      </Router>
  )
};

export default Root;
