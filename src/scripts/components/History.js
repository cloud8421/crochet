import React from 'react';
import HistoryStore from '../stores/LayoutHistory';
import Pagination from './history/pagination';
import Layout from './history/layout';

const VISIBLE_VERSIONS = 5;

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
          <h2>Last {VISIBLE_VERSIONS} versions</h2>
        </header>
        {layouts.size > 0 ? <ul>{layouts.toArray()}</ul> : <p>None yet!</p>}
        <footer>
          <Pagination pageNumbers={this.state.pageNumbers} current={this.state.pageNumber} />
        </footer>
      </section>
    )
  }
});

export default HistoryComp;
