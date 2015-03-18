import React from 'react';

const Project = React.createClass({
  render () {
    return (
      <li>{this.props.name}</li>
    )
  }
});

export default Project;
