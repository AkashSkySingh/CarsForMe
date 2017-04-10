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
    <footer>
      <ul className="footer-list">

        <li>
          <h4>Tech:</h4>
          <p>Django & React</p>

        </li>

        <li>
          <h4>About Us:</h4>
          <ul className="linkedin">

            <li className="linkedin-item">
              <a href="https://www.linkedin.com/in/huynhaaron/"><h4>Aaron Huynh</h4></a>
            </li>

            <li className="linkedin-item">
              <a href="https://www.linkedin.com/in/akashpreetsingh/"><h4>Akash Singh</h4></a>
            </li>

            <li className="linkedin-item">
              <a href="https://www.linkedin.com/in/khalil-nasirov/"><h4>Khalil Nasirov</h4></a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://github.com/AkashSkySingh/CarsForMe"><h4>CarsForMe:</h4>
          <p>GitHub</p></a>
        </li>

      </ul>
    </footer>
  </div>
);

export default App;
