import React from 'react';

import NavBar from './navbar/navbar';

const App = ({ children }) => (
  <div >
    <h1>Hi from App</h1>
    <NavBar />
    { children }
  </div>
);

export default App;
