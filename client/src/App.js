import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Home from './components/home';
import Add from './components/add';
import history from './history'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
      </Switch>
    </Router>
  );
}

export default App;
