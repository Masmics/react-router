import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Yellow from './Yellow';

function Header() {
  return (
    <header>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link exact to="/red">Red</Link>
          <Link exact to="/blue">Blue</Link>
          <Link to="/yellow">Yellow</Link>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Home" />
        <Route path="/red" component={Red} />
        <Route path="/blue" component={Blue} />
        <Route path="/yellow" component={Yellow} />
      </Switch>
    </Router>
  );
}


