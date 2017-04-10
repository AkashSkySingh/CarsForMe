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
    let trimIdx = car.model_trim.indexOf("(");
    let trim1 = car.model_trim.slice(0, trimIdx);
    let trim2 = car.model_trim.slice(trimIdx);
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
              {trim1}
            </h4>

            <h4 className="carlist-text">
              {trim2}
            </h4>

            <div className="carlist-item-divs">

              <h3 className="carlist-text">
                Transmission:
              </h3>

              <h4 className="carlist-text">
                {car.model_transmission_type}
              </h4>

            </div>

            <div className="carlist-item-divs">

              <h3 className="carlist-text">
                Highway:
              </h3>

              <h4 className="carlist-text">
                {car.model_lkm_hwy} mpg
              </h4>

              <h3 className="carlist-text">
                City:
              </h3>

              <h4 className="carlist-text">
                {car.model_lkm_city} mpg
              </h4>

            </div>

          </div>

        </Link>
      </li>
    );
  }
}

export default CarListItem;
