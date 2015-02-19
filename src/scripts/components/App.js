import React from 'react';
import Navigation from './Navigation';
import GridContainer from './GridContainer';
import Editor from './Editor';
import History from './History';

const App = React.createClass({
  render (){
    return (
      <div id="app">
        <Navigation />
        <section className="container">
          <section className="workspace">
            <Editor initialColor="#007E90"/>
            <GridContainer />
          </section>
          <History />
        </section>
      </div>
    );
  }
});

export default App;
