import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import HW from './HW';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/HW/:page" render={({ match }) => React.createElement(HW[match.params.page])} />
          <Route path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
