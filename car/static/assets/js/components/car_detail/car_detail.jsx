import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { hashHistory } from 'react-router';
const params = {v: '3.exp', key: 'AIzaSyC2ysLHnXB5uOYcbrMyrAbwNqxziomWUIs'};



class CarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: null, position: "unknown", lng: null, lat: null, locations: {} };
    this.getInfo = this.getInfo.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
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
    // this.getPosition();
    this.getCarPicture();
    // this.getDealerships();
  }

  // Find index via props.id or the entire car object to move forward.
  // The carList is an object of objects.
  // Use the .keys function to iterate and store the value associated with current car and its neighbors into variable. let the function itself take in a direction, base on the direct, set the state to  the following vehicle in carsList.
  // Must come up with a conditional to see if there is a carList present inside props, else use ids to dictate arrow movement.
  cars() {
    let carsList = [];
    let idx = null;
    let keyd = Object.keys(this.props.carList);
    let lastIdx = keyd.length - 1;
    keyd.forEach((key) => {
      carsList.push(this.props.carList[key]);
      if (this.props.carList[key].id === this.props.id) {
        idx = key;
      }
    });
    return ({
      carList:  carsList,
      index: idx,
      lastIndex: lastIdx
    })
  }

  moveForward() {
    let { carList, index } = this.cars();

    if (index) {

      if (parseInt(index) !== carList.length - 1) {
        hashHistory.push(`/cars/${carList[parseInt(index) + 1].id}`)
      } else {
        hashHistory.push(`/cars/${carList[0].id}`)
      }

    } else {
      if (this.props.id !== 2360) {
        hashHistory.push(`/cars/${this.props.id + 1}`);
      } else {
        hashHistory.push(`/cars/${1}`);
      }
    }
  }

  moveBackward() {
    let { carList, index, lastIndex } = this.cars();

    if (index) {

      if (parseInt(index) !== 0) {
        hashHistory.push(`/cars/${carList[parseInt(index) - 1].id}`)
      } else {
        hashHistory.push(`/cars/${carList[lastIndex].id}`)
      }

    } else {
      if (this.props.id !== 1) {
        hashHistory.push(`/cars/${this.props.id - 1}`);
      } else {
        hashHistory.push(`/cars/${2360}`);
      }
    }
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
        keyword: `${that.props.details.model_make_id} Dealership`,
        type: "car_dealer",
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
    //
    // let markers;
    //   if (this.state.locations.length !== undefined) {
    //     markers = Object.keys(this.state.locations).map( (id, index) => {
    //       return (<Marker key={index}
    //                 lat={this.state.locations[id].geometry.location.lat}
    //                 lng={this.state.locations[id].geometry.location.lng}
    //               />);
    //     });
    // }

    const { model_year, model_make_id, model_name, model_trim } = details;
    return(
      <div className="detail-middle">

        <div className="arrow" onClick={this.moveBackward}>
          <img className="arrow-img" src="https://res.cloudinary.com/nightstock/image/upload/s--zQgvR_x5--/a_180/v1493781285/arrow-right-white_hubelu.png" />
        </div>

        <div className="detail-center">

          <div className="detail-wrap">

            {this.state.picture ? <img width="600" className="detail-img" src={`${this.state.picture}`} /> : "Error: No Car Selected" }

            <div className="detail-item">

              <h2 className="detail-text">
              {details.model_year} {details.model_make_id} {details.model_name}
              </h2>

              <h3 className="detail-text">
              Trim:
              </h3>

              <h3 className="detail-text">
              {details.model_trim}
              </h3>

              <div className="detail-divs">

                <h3 className="detail-text">
                Transmission:
                </h3>

                <h3 className="detail-text">
                {details.model_transmission_type}
                </h3>

              </div>

              <div className="detail-divs">

                <h3 className="detail-text">
                Drive:
                </h3>

                <h3 className="detail-text">
                {details.model_drive}
                </h3>

              </div>

              <div className="detail-divs">

                <h3 className="detail-text">
                Highway:
                </h3>

                <h3 className="detail-text">
                {details.model_lkm_hwy} mpg
                </h3>

              </div>

              <div className="detail-divs">

                <h3 className="detail-text">
                City:
                </h3>

                <h3 className="detail-text">
                {details.model_lkm_city} mpg
                </h3>

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
            lat="37.7915922"
            lng="-122.39322559999998"
            zoom={9}

            loadingMessage={`Loading Map Nearest Dealerships`}
            params={params}
            onMapCreated={this.onMapCreated}
            >

            <Marker
            lat="37.500917"
            lng="-121.978472"/>
            <Marker
            lat="37.97537159999999"
            lng="-122.044704"/>
            <Marker
            lat="37.67725464575588"
            lng="-122.45638263558197"/>
            <Marker
            lat="37.9505991"
            lng="-122.4936889"/>
            <Marker
            lat="37.499984"
            lng="-121.9764596"/>
            <Marker
            lat="37.5905941"
            lng="-122.3650063"/>
            <Marker
            lat="37.5009093,"
            lng="-121.9784772"/>
            <Marker
            lat="37.58790330000001"
            lng="-122.3621636"/>
            <Marker
            lat="37.748344"
            lng="-122.20476"/>
            <Marker
            lat="37.38311289999999,"
            lng="-121.9436799"/>
            <Marker
            lat="38.099506,"
            lng="-122.255174"/>
            <Marker
            lat="37.9185141"
            lng="-122.0659726"/>
            <Marker
            lng="-122.14901565"
            lat="37.4301183"/>
            <Marker
            lat="37.4996399"
            lng="-121.9754804"/>
            <Marker
            lat="37.4996399"
            lng="-121.9754804"/>

            </Gmaps>
          </div>
        </div>

        <div className="arrow" onClick={this.moveForward}>
          <img className="arrow-img" src="https://res.cloudinary.com/nightstock/image/upload/s--JqZfSSuS--/v1493781285/arrow-right-white_hubelu.png" />
        </div>

        <footer>
          <ul className="footer-list">

            <li>
              <h4 className="footer-text">Tech:</h4>
              <p className="footer-para">Django & React</p>

            </li>

            <li>
              <h4 className="footer-text">About Us:</h4>
              <ul className="linkedin">

                <li className="linkedin-item">
                  <a href="https://www.linkedin.com/in/huynhaaron/"><h4 className="footer-text">Aaron Huynh</h4></a>
                </li>

                <li className="linkedin-item">
                  <a href="https://www.linkedin.com/in/akashpreetsingh/"><h4 className="footer-text">Akash Singh</h4></a>
                </li>

                <li className="linkedin-item">
                  <a href="https://www.linkedin.com/in/khalil-nasirov/"><h4 className="footer-text">Khalil Nasirov</h4></a>
                </li>
              </ul>
            </li>

            <li>
              <a href="https://github.com/AkashSkySingh/CarsForMe"><h4 className="footer-text">CarsForMe:</h4>
              <p className="footer-para">GitHub</p></a>
            </li>

          </ul>
        </footer>
      </div>
    );
  }
}

export default CarDetail;
