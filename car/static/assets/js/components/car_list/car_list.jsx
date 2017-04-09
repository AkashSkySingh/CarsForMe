import React from 'react';
import { Link } from 'react-router';
import CarListItem from './car_list_item';

class CarList extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchCars({data: this.props.searchParams});
  }

  render() {
    const {carList} = this.props;
    const list = Object.keys(carList).map( (id, index) => {
      return <CarListItem key={index}
        id={carList[id].id}
        modelName={carList[id].model_name}/>
    })
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

}

export default CarList;
