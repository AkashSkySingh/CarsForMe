import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';
import CarListItem from './car_list_item';

class CarList extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchCars(this.props.searchParams);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let body = document.body;
    let html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
                          html.clientHeight, html.scrollHeight, html.offsetHeight );

    if (body.scrollTop + window.innerHeight + 150 > height) {
      hashHistory.replace({ pathname:"/carlist", query: {page: this.props.page + 1} })
    }
  }

  render() {
    const {carList} = this.props;
    const list = Object.keys(carList).slice(0, 10 * this.props.page).map( (id, index) => {
      return (<CarListItem key={index}
        car={this.props.carList[id]}/>);
    });
    return (
      <div className="carlist-middle">

        <div className="carlist-filter">

        </div>

        <div className="carlist-table">
          <ul className="carlist">
            {list}
          </ul>
        </div>

      </div>
    );
  }

}

export default CarList;
