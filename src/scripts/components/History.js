import React from 'react';
import Paginator from '../lib/paginator';
import HistoryStore from '../stores/LayoutHistory';
import Pagination from './history/pagination';
import Layout from './history/layout';

const VISIBLE_VERSIONS = 5;

let getState = function() {
  return {
    layouts: HistoryStore.getLayouts()
  }
}

const HistoryComp = React.createClass({
  getInitialState: function() {
    return {
      layouts: HistoryStore.getLayouts(),
      page: 1
    }
  },
  componentDidMount() {
    HistoryStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render() {
    let paginated = Paginator.paginate(this.state.layouts, VISIBLE_VERSIONS);

    let layouts = paginated
      .get(this.state.page)
      .map(function(layout) {
        return <Layout layout={layout} />
      });

    let pageNumbers = paginated.keySeq();

    return (
      <section className="history">
        <header>
          <span className="count">{this.state.layouts.size} total</span>
          <h2>Last {VISIBLE_VERSIONS} versions</h2>
        </header>
        {layouts.size > 0 ? <ul>{layouts.toArray()}</ul> : <p>None yet!</p>}
        <footer>
          <Pagination pageNumbers={pageNumbers} />
        </footer>
      </section>
    )
  }
});

export default HistoryComp;
