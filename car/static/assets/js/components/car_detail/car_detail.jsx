import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyC2ysLHnXB5uOYcbrMyrAbwNqxziomWUIs'};



class CarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: null, position: "unknown", lng: null, lat: null, locations: {} };
  }


  componentWillMount() {
    this.props.fetchCar({id: this.props.id});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.fetchCar(nextProps.id);
    }
  }

  componentDidMount() {
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
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };

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
  };

  getDealerships() {
    let that = this;
    debugger;
    console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.773972,-122.431297&radius=300000&keyword=${this.props.details.model_make_id}%20Dealership&type=car_deal&key=AIzaSyC2ysLHnXB5uOYcbrMyrAbwNqxziomWUIs`);
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
    const { details } = this.props;
    let markers;
    // let text;
    if (this.state.locations.length !== undefined) {
      markers = Object.keys(this.state.locations).map( (id, index) => {
        return <Marker key={index}
                  lat={this.state.locations[id].geometry.location.lat}
                  lng={this.state.locations[id].geometry.location.lng}
                />
      });
    }

    const { model_year, model_make_id, model_name, model_trim } = details;
    return(
      <div className="car-detail-container">
        <div className="details-box">
          <div className="detail-image">
            <img />
            {this.state.picture ? <img width="600" src={`${this.state.picture}`} /> : "Error: No Car Selected" }

          </div>

          <div className="detail-info">
            <header>{details.model_year} {details.model_make_id} {details.model_name}</header>
            <span>{details.model_trim}</span>
            <div className="detail-specs">
              <table>
                <tbody>
                  <tr>
                    <td>Transmission:</td>
                    <td>{details.model_transmission_type}</td>
                  </tr>
                  <tr>
                    <td>Drive:</td>
                    <td>{details.model_drive}</td>
                  </tr>
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <td>City MPG:</td>
                    <td>{details.model_lkm_city}</td>
                  </tr>
                  <tr>
                    <td>Highway MPG:</td>
                    <td>{details.model_lkm_hwy}</td>
                  </tr>
                  <tr>
                    <td>Mixed MPG:</td>
                    <td>{details.model_lkm_mixed}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="other-details">
        </div>

        <div className="dealerships">
          {this.state.position}
          <Gmaps
            width={'500px'}
            height={'500px'}
            lat={this.state.lat}
            lng={this.state.lng}
            zoom={10}
            loadingMessage={`Loading Map Nearest ${details.model_make_id} Dealerships`}
            params={params}
            onMapCreated={this.onMapCreated}>

              {markers}

            {/* <Circle
              lat={this.state.lat}
              lng={this.state.lng}
              radius={500}
              onClick={this.onClick} /> */}
          </Gmaps>
        </div>
      </div>
    );
  }
}

export default CarDetail;
