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

function Home() {
  return <h1>Home{Header}</h1>;
}

// function Color({ match }) {
//   return (
//     <>
//       <h1>Color {match.params.id}</h1>
//       <Switch>
//         <Route path="/"
//       </Switch>
//     </>
//   )
// }

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/yellow">Yellow</Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/red" component={Red} />
        <Route exact path="/blue" component={Blue} />
        <Route exact paht="/yellow" component={Yellow} />
      </Switch>
    </Router>
  );
}


