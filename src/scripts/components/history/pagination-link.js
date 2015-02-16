import React from 'react';

const PaginationLink = React.createClass({
  render() {
    return <li><a className={this.props.selected ? 'active' : '' } onClick={this.props.onClick}>{this.props.number}</a></li>;
  }
});

export default PaginationLink;
