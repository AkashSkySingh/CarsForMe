import React, { Component } from 'react';

class Navbar extends Component {

  constructor(){
    super();
    this.state = { link: null };
  }

  componentDidMount(){
    let that = this;
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCzWOe2mBvhD-gSITuOQc_oMKY1bSx91IY&cx=003264831380035041777:hi4v6rphnr8&q=2017%20Ford%20Focus%20RS&searchType=image&imgSize=large&alt=json',
      success: function(data){
        that.setState({link: data.items[0].link});
      }
    })

  }

  render() {
    return (
      <div>
        <h2> Cars For Me</h2>
        <img src="https://www.carthrottle.com/wp-content/uploads/2013/11/Picture-106.png" alt="P1"/>
        {this.state.link ? <img width="600" src={`${this.state.link}`} /> : "Error: No Car Selected" }
      </div>
    )
  }
}

export default Navbar;
