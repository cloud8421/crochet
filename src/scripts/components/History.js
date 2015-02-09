import React from 'react';
import HistoryStore from '../stores/LayoutHistory';
import Layout from './history/layout';

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
    let layouts = this.state.layouts.map(function(layout) {
      return <Layout layout={layout} />
    });
    return (
      <section className="history">
        <ul className="layouts">
          {layouts.toArray()}
        </ul>
      </section>
    )
  }
});

export default HistoryComp;
