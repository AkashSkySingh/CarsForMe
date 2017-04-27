import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className='root-follow'>
    <header>
      <Link to='/' className='anchors logo-link'>
        <img className='logo' src='http://res.cloudinary.com/nightstock/image/upload/s--huWnN3j0--/v1491701654/automobile-1300231_960_720_sw8xc3.png' />
        <h1>CarsForMe</h1>
      </Link>
    </header>
    { children }
  </div>
);

export default App;
