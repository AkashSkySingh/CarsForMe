import React from 'react';
import { connect } from 'react-redux';
import CarList from './car_list';

import { fetchCars } from '../../actions/car_actions';

const mapStateToProps = (state, ownProps) => {
  let page = parseInt(ownProps.location.query.page)
  if (!page) { page = 1 }

  return ({
    carList: state.carList,
    searchParams: state.searchParams,
    page: page
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCars: data => dispatch(fetchCars(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
