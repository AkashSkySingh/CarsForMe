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
          <h2 className="splash-text">
            Select a body type below to start right away!
          </h2>

          <ul className="splash-list">


            <li className="splash-item" onClick={() => this.handleClick("convertible")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--P9CUH9mt--/v1493327280/bmw-serie-4-cabrio-side-view_nvxwv0.png" className="splash-img"/>
              <h3 className="splash-item-text">Convertible</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("coupe")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--7qjuLKXv--/v1493327302/mercedes-benz-classe-c-coupe-side-view_gwt6it.png" className="splash-img"/>
              <h3 className="splash-item-text">Coupe</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("hybrid")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--UIurqjeT--/v1493327249/prius-car_tcm-3060-347907_pgrjek.png" className="splash-img"/>
              <h3 className="splash-item-text">Hybrid</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("minivan")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--Nc5HvagS--/v1493311924/toyota-verso-icon-side_iwunk3.png" className="splash-img"/>
              <h3 className="splash-item-text">Mini - Van</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick('sedan')}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--8xL008jL--/v1493327161/CosyVehicleImage_2_ecivx1.png" className="splash-img"/>
              <h3 className="splash-item-text">Sedan</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("sport")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--FSGCRFTJ--/v1493327222/CosyVehicleImage_4_lykfs8.png" className="splash-img"/>
              <h3 className="splash-item-text">Sport</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("suv")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--QTlfC2Qq--/v1493327197/CosyVehicleImage_3_xztk3l.png" className="splash-img"/>
              <h3 className="splash-item-text">SUV</h3>
            </li>

            <li className="splash-item" onClick={() => this.handleClick("truck")}>
              <img src="https://res.cloudinary.com/nightstock/image/upload/s--T1QeMdZS--/v1493326645/ca-2017-chevrolet-silverado-1500-pickup-truck-mo-bp-648x218_iqutnl.png" className="splash-img"/>
              <h3 className="splash-item-text">Truck</h3>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Splash;
