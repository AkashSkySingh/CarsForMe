import React from 'react';
import { connect } from 'react-redux';
import CarList from './car_list';
import { Link } from 'react-router';

class CarListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { picture: null };
    this.getCarPicture = this.getCarPicture.bind(this);
  }
  componentDidMount() {
    this.getCarPicture();
  }

  getCarPicture() {
    let that = this;
    $.ajax({
      type: 'GET',
      data: {
        imgSize: "large",
        alt: "json",
        searchType: "image",
        q: `2017 ${that.props.car.model_make_display} ${that.props.car.model_name}`,
        cx: "003264831380035041777:hi4v6rphnr8",
        key: "AIzaSyCzWOe2mBvhD-gSITuOQc_oMKY1bSx91IY"
      },
      url: `https://www.googleapis.com/customsearch/v1`,
      success: function(data){
        that.setState({picture: data.items[0].link});
      }
    });
  }

  render() {
    let {car} = this.props;
    let trimIdx = car.model_trim.indexOf("(");
    let trim1 = car.model_trim.slice(0, trimIdx);
    let trim2 = car.model_trim.slice(trimIdx);
    return (
      <li className="carlist-item">
        <Link to={`cars/${car.id}`} className="carlist-link">

          {/* <img className="carlist-item-img" src={`${this.state.picture}`} /> */}
          {this.state.picture ? <img width="600" className="carlist-item-img" src={`${this.state.picture}`} /> : "Loading Picture..." }
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
