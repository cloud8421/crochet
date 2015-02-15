import React from 'react';

const PaginationLink = React.createClass({
  showPage() {
    console.log(this.props.number);
  },
  render() {
    return <li><a onClick={this.showPage}>{this.props.number}</a></li>;
  }
});

export default PaginationLink;
