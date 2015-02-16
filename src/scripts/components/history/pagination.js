import React from 'react';
import PaginationLink from './pagination-link';
import LayoutHistoryActions from '../../actions/LayoutHistoryActions';

const Pagination = React.createClass({
  openPage: function(pn) {
    LayoutHistoryActions.setPage(pn);
  },
  render() {
    let pageNumbers = this.props.pageNumbers.map(pn => {
      return (
        <PaginationLink
          key={pn}
          number={pn}
          selected={pn == this.props.current}
          onClick={this.openPage.bind(this, pn)} />
      )
    });

    return (
      <ul className="pagination">
        {pageNumbers.toArray()}
      </ul>
    );
  }
});

export default Pagination;
