import React from 'react';
import NavBar from './navbar/navbar';

const App = ({ children }) => (
  <div >
    <h1>Hi from APP</h1>
    <NavBar />
    { children }
  </div>
);

export default App;
