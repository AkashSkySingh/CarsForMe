import React from 'react';

class CarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCar({id: this.props.id});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.fetchCar(nextProps.id);
    }
  }


  render() {
    const { details } = this.props;

    const { model_year, model_make_id, model_name, model_trim } = details;

    return(
      <div className="car-detail-container">
        <div className="details-box">
          <div className="detail-image">
            <img />
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
        </div>
      </div>
    );
  }
}

export default CarDetail;
