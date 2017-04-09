import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

import { receiveSearchParams } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searchParams: state.searchParams
});

const mapDispatchToProps = dispatch => ({
  setSearchParams: (params) => dispatch(receiveSearchParams(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
