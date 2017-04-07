import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

import { fetchCars } from '../../actions/car_actions';

const mapStateToProps = state => {
  // debugger;
  return ({
    AwardWinningCars: state
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCars: (cars) => (dispatch(fetchCars(cars)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
