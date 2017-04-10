import { connect } from 'react-redux';

import CarDetail from './car_detail';
import { fetchCar } from '../../actions/car_actions';

const mapStateToProps = (state, ownProps) => ({
  id: parseInt(ownProps.params.carId),
  details: state.carDetail
});

const mapDispatchToProps = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
