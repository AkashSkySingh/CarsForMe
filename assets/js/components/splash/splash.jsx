import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="middle">
        <div className="splash-center">
          <h1>Hello World from Splash</h1>
          <ul className="splash-list">

            <li className="splash-item">
              <h2>Convertible</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--nW0VNNJL--/v1491581600/convertible_ovdrj1.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Coupe</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--3h-byTWO--/v1491581600/coupe_sf23in.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Hybrid</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--klZ-wO4t--/v1491581600/hybrid_lcwkuv.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Minivan</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--Clr3UVrE--/v1491581600/minivan_arcilh.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Sedan</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--Lpzu9z_J--/v1491581600/sedan_naeef1.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Sport</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--xgMTwW24--/v1491581600/sport_dt73u0.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>SUV</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--KMwpSMTc--/v1491581600/suv_fx1bmk.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Truck</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--ny-WHk6q--/v1491581600/truck_t5docz.png" className="splash-img"/>
            </li>

            <li className="splash-item">
              <h2>Van</h2>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--cbcGWxl3--/v1491581600/van_kuhast.png" className="splash-img"/>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Splash;
