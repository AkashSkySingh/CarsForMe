import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyC2ysLHnXB5uOYcbrMyrAbwNqxziomWUIs'};



class CarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: null, position: "unknown", lng: null, lat: null, locations: {} };
    this.getInfo = this.getInfo.bind(this);
  }
  componentWillMount() {
    this.props.fetchCar(this.props.id).then(this.getInfo);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.fetchCar(nextProps.id).then(this.getInfo);
    }
  }
  getInfo() {
    this.getPosition();
    this.getCarPicture();
    this.getDealerships();
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var latlng = JSON.stringify(position.coords.latitude) + "," +
                     JSON.stringify(position.coords.longitude);
        this.setState({position: latlng, lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (error) => {},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  getCarPicture() {
    let that = this;
    $.ajax({
      type: 'GET',
      data: {
        imgSize: "large",
        alt: "json",
        searchType: "image",
        q: `2017 ${that.props.details.model_make_id} ${that.props.details.model_name}`,
        cx: "003264831380035041777:hi4v6rphnr8",
        key: "AIzaSyCzWOe2mBvhD-gSITuOQc_oMKY1bSx91IY"
      },
      url: `https://www.googleapis.com/customsearch/v1`,
      success: function(data){
        that.setState({picture: data.items[0].link});
      }
    });
  }

  getDealerships() {
    let that = this;
    $.ajax({
      type: 'GET',
      data: {
        location: "37.773972,-122.431297",
        radius: "300000",
        keyword: `Acura Dealership`,
        type: "car_deal",
        key: "AIzaSyC2ysLHnXB5uOYcbrMyrAbwNqxziomWUIs"
      },
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
      success: function(data){
        that.setState({locations: data.results});
      }
    });
  }

  render() {
    this.getPosition();
    const { details } = this.props;

    let markers;

    if (this.state.locations.length !== undefined) {
      markers = Object.keys(this.state.locations).map( (id, index) => {
        return (<Marker key={index}
                  lat={this.state.locations[id].geometry.location.lat}
                  lng={this.state.locations[id].geometry.location.lng}
                />);
      });
    }

    const { model_year, model_make_id, model_name, model_trim } = details;
    return(
      <div className="detail-middle">

        <div className="detail-wrap">

          {this.state.picture ? <img width="600" className="detail-img" src={`${this.state.picture}`} /> : "Error: No Car Selected" }

          <div className="detail-item">

            <h2 className="detail-text">
              {details.model_year} {details.model_make_id} {details.model_name}
            </h2>

            <h3 className="detail-text">
              Trim:
            </h3>

            <h4 className="detail-text">
              {details.model_trim}
            </h4>

            <div className="detail-divs">

              <h3 className="detail-text">
                Transmission:
              </h3>

              <h4 className="detail-text">
                {details.model_transmission_type}
              </h4>

            </div>

            <div className="detail-divs">

              <h3 className="detail-text">
                Drive:
              </h3>

              <h4 className="detail-text">
                {details.model_drive}
              </h4>

            </div>

            <div className="detail-divs">

              <h3 className="detail-text">
                Highway:
              </h3>

              <h4 className="detail-text">
                {details.model_lkm_hwy} mpg
              </h4>

            </div>

            <div className="detail-divs">

              <h3 className="detail-text">
                City:
              </h3>

              <h4 className="detail-text">
                {details.model_lkm_city} mpg
              </h4>

            </div>

          </div>
        </div>

        <div className="detail-dealership">

          <h2 className="detail-text">
            Local Dealerships:
          </h2>

          <Gmaps
            className="detail-gmap"
            width={'900px'}
            height={'300px'}
            lat={this.state.lat}
            lng={this.state.lng}
            zoom={10}
            loadingMessage={`Loading Map Nearest Dealerships`}
            params={params}
            onMapCreated={this.onMapCreated}
            >

              {markers}

          </Gmaps>
        </div>

      </div>
    );
  }
}

export default CarDetail;
