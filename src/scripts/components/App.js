import React from 'react';
import Navigation from './Navigation';
import { RouteHandler } from 'react-router';

const App = React.createClass({
  render (){
    return (
      <div id="app">
        <Navigation />
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

export default App;
