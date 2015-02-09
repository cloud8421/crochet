jest.autoMockOff();

import React from 'react/addons';
const {TestUtils} = React.addons;
import App from '../App.js';

describe('App', function () {
  it('generate appname in <h1>', function () {
    let app = TestUtils.renderIntoDocument(<App />);
    let title = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');
    expect(title.getDOMNode().textContent).toEqual('Crochet');
  });
});
