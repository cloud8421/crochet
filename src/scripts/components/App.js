import React from 'react';
import Grid from './Grid';
import Editor from './Editor';
import History from './History';

const App = React.createClass({
  render (){
    return (
      <section className="app">
        <h1>Crochet</h1>
        <section className="workspace">
          <Editor initialColor="#007E90"/>
          <Grid />
        </section>
        <History />
      </section>
    );
  }
});

export default App;
