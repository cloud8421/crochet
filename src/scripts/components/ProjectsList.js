import React from 'react';
import Project from './projects-list/Project';

let projects = [
  {name: 'Project A'},
  {name: 'Project 2'}
]

const ProjectsList = React.createClass({
  render () {
    let projectComponents = projects.map(pj => {
      return <Project name={pj.name} />
    });
    return (
      <ul>{projectComponents}</ul>
    )
  }
});

export default ProjectsList;
