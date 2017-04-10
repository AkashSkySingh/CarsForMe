import React from 'react';
import { connect } from 'react-redux';
import CarList from './car_list';
import { Link } from 'react-router';

class CarListItem extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    let {car} = this.props;
    // console.log(car);
    // debugger;
    return (
      <li className="carlist-item">
        <Link to={`cars/${car.id}`} className="carlist-link">

          <img className="carlist-item-img" src="http://caribbeanautobox.com/img/uploads/vehicles/default-car.png" />

          <div className="carlist-item-text">

            <h2 className="carlist-text">
              {car.model_make_display} {car.model_name}
            </h2>

            <h3 className="carlist-text">
              Trim:
            </h3>

            <h4 className="carlist-text">
              {car.model_trim}
            </h4>


            <h4 className="carlist-text">
              Transmission: <br /> {car.model_transmission_type}
            </h4>

            <div className="carlist-item-mpg">

              <h4 className="carlist-text">
                Highway MPG: <br /> {car.model_lkm_hwy}
              </h4>

              <h4 className="carlist-text">
                City MPG: <br /> {car.model_lkm_city}
              </h4>

            </div>

          </div>

        </Link>
      </li>
    );
  }
}

export default CarListItem;
