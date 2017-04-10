import React from 'react';
import { Link } from 'react-router';
import CarListItem from './car_list_item';

class CarList extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    // console.log(this.props.searchParams);
    this.props.fetchCars(this.props.searchParams);
  }

  render() {
    const {carList} = this.props;
    const list = Object.keys(carList).map( (id, index) => {
      return (<CarListItem key={index}
        car={this.props.carList[id]}/>);
    });
    return (
      <div className="carlist-middle">

        <div className="carlist-filter">

        </div>

        <div className="carlist-table">
          <ul className="carlist">
            {list}
          </ul>
        </div>

      </div>
    );
  }

}

export default CarList;
