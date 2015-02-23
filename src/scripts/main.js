require('../index.html');
require('../assets/stylesheets/style.scss');

require('../assets/images/linen.png');

import React from 'react';
import Router from 'react-router';

import App from './components/App';
import NewProject from './components/NewProject';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={NewProject} />
    <Route name="new-project" handler={NewProject} path="new-project" />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('main'));
});
