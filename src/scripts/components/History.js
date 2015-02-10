import React from 'react';
import HistoryStore from '../stores/LayoutHistory';
import Layout from './history/layout';

const VISIBLE_VERSIONS = 5;

let getState = function() {
  return {
    layouts: HistoryStore.getLayouts()
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
    let layouts = this.state.layouts
      .takeLast(VISIBLE_VERSIONS)
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
      </section>
    )
  }
});

export default HistoryComp;
