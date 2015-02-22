import React from 'react';
import GridContainer from './GridContainer';
import Editor from './Editor';
import History from './History';

const NewProject = React.createClass({
  render () {
    return (
      <section className="new-project">
        <section className="workspace">
          <Editor initialColor="#007E90"/>
          <GridContainer />
        </section>
        <History />
      </section>
    );
  }
});

export default NewProject;
