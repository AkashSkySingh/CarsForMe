import React from 'react';
import { hashHistory } from 'react-router';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(bodyType) {
    this.props.setSearchParams({model_body: bodyType});
    hashHistory.push("/carlist");
  }

  render(){
    return (
      <div className="splash-middle">
        <div className="splash-wrap">
          <h1 className="splash-text">
            Finding a car that fits has never been so easy!
          </h1>
        </div>

        <div className="splash-table">
          <h3 className="splash-text">
            Select a body type below to start right away!
          </h3>

          <ul className="splash-list">


            <li className="splash-item" onClick={() => this.handleClick("convertible")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--nW0VNNJL--/v1491581600/convertible_ovdrj1.png" className="splash-img"/>
              <h2>Convertible</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("coupe")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--3h-byTWO--/v1491581600/coupe_sf23in.png" className="splash-img"/>
              <h2>Coupe</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("hybrid")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--klZ-wO4t--/v1491581600/hybrid_lcwkuv.png" className="splash-img"/>
              <h2>Hybrid</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("minivan")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--Clr3UVrE--/v1491581600/minivan_arcilh.png" className="splash-img"/>
              <h2>Mini - Van</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick('sedan')}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--Lpzu9z_J--/v1491581600/sedan_naeef1.png" className="splash-img"/>
              <h2>Sedan</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("sport")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--xgMTwW24--/v1491581600/sport_dt73u0.png" className="splash-img"/>
              <h2>Sport</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("suv")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--KMwpSMTc--/v1491581600/suv_fx1bmk.png" className="splash-img"/>
              <h2>SUV</h2>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("truck")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--ny-WHk6q--/v1491581600/truck_t5docz.png" className="splash-img"/>
              <h2>Truck</h2>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Splash;
