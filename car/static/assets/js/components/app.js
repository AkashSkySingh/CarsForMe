import React from 'react';
import SplashContainer from './splash/splash_container';

const App = ({ children }) => (
  <div >
    <h1>Hi from App</h1>
    <SplashContainer />
    { children }
  </div>
);

export default App;
