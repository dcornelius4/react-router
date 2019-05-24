import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Green from './Green';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/red" component={Red} />
        <Route path="/blue" component={Blue} />
        <Route path="/green" component={Green} />
      </Switch>
      </>
    </Router>
  );
}
