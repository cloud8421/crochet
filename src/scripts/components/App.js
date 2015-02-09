import React from 'react';
import Grid from './Grid';
import Editor from './Editor';

const App = React.createClass({
  render (){
    return (
      <section className="app">
        <h1>Crochet</h1>
        <Editor initialColor="#007E90"/>
        <Grid />
      </section>
    );
  }
});

export default App;
