import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Red from './Red';
import Header from './Header';

export default function Aoo() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/red" component={Red} />
      </Switch>
      </>
    </Router>
  );
}
