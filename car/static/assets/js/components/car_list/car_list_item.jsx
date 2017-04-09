import React from 'react';
import { connect } from 'react-redux';
import CarList from './car_list';
import { Link } from 'react-router';

class CarListItem extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <Link to={`cars/${this.props.id}`}>this.props.details.modelName</Link>
      </div>
    )
  }
}

export default CarListItem;
