import React from 'react';
import Project from './projects-list/Project';
import ProfileStore from '../stores/Profile';

let getState = function() {
  return {
    projects: ProfileStore.getProjects()
  }
}

let noProjects = function() {
  return (
    <div className="notice">
      <p>You don't have any projects yet.</p>
    </div>
  )
}

let buildList = function(projects) {
  projects.toArray().map(pj => {
    return <Project name={pj.name} />
  });
}

const ProjectsList = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    ProfileStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render () {
    if (this.state.projects.size > 0) {
      return buildList(this.state.projects);
    } else {
      return noProjects();
    }
  }
});

export default ProjectsList;
