import React from 'react';
import NavBar from './navbar/navbar';
import SplashContainer from './splash/splash_container';

const App = ({ children }) => (
  <div >
    <h1>Hi from APP</h1>
    <NavBar />
    <SplashContainer />
    { children }
  </div>
);

export default App;
