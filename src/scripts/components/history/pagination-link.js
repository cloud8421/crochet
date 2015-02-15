import React from 'react';
import LayoutHistoryActions from '../../actions/LayoutHistoryActions';

const PaginationLink = React.createClass({
  showPage() {
    LayoutHistoryActions.setPage(this.props.number);
  },
  render() {
    return <li><a onClick={this.showPage}>{this.props.number}</a></li>;
  }
});

export default PaginationLink;
