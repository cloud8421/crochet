jest.autoMockOff();

import React from 'react/addons';
const {TestUtils} = React.addons;
import Navigation from '../Navigation.js';

describe('Navigation', function () {
  it('generate appname in <h1>', function () {
    let navigation = TestUtils.renderIntoDocument(<Navigation />);
    let title = TestUtils.findRenderedDOMComponentWithTag(navigation, 'h1');
    expect(title.getDOMNode().textContent).toEqual('Crochet');
  });
});
