import React from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';

export default props => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route from="*" to="/" />
    </div>
  </HashRouter>
);
