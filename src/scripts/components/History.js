import React from 'react';
import HistoryStore from '../stores/LayoutHistory';
import Pagination from './history/pagination';
import Layout from './history/layout';

let getState = function() {
  return {
    layouts: HistoryStore.getLayouts(),
    page: HistoryStore.getPage(),
    pageNumber: HistoryStore.getPageNumber(),
    pageNumbers: HistoryStore.getPageNumbers()
  }
}

const HistoryComp = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    HistoryStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render() {
    let layouts = this.state.page
      .map(function(layout) {
        return <Layout layout={layout} />
      });

    return (
      <section className="history">
        <header>
          <span className="count">{this.state.layouts.size} total</span>
          <h2>History</h2>
          <Pagination pageNumbers={this.state.pageNumbers} current={this.state.pageNumber} />
        </header>
        {layouts.size > 0 ? <ul>{layouts.toArray()}</ul> : <p>None yet!</p>}
        <footer>
        </footer>
      </section>
    )
  }
});

export default HistoryComp;
