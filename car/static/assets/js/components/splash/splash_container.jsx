import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

import { fetchCars } from '../../actions/car_actions';

const mapStateToProps = state => {
  return ({

  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
