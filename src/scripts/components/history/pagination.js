import React from 'react';
import PaginationLink from './pagination-link';

const Pagination = React.createClass({
  render() {
    let pageNumbers = this.props.pageNumbers.map(pn => {
      return <PaginationLink key={pn} number={pn} />
    });

    return (
      <ul>
        {pageNumbers.toArray()}
      </ul>
    );
  }
});

export default Pagination;
