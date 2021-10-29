import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Landing, Dashboard, Profile, Graph } from './pages';
import ApiTests from './components/ApiTests';

const TempNav = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/landing'>landing</Link>
      </li>
      <li>
        <Link to='/dashboard'>dashboard</Link>
      </li>
      <li>
        <Link to='/profile'>profile</Link>
      </li>
      <li>
        <Link to='/flow'>flow</Link>
      </li>
    </ul>
  );
};

const App = () => {
  return (
    <Router>
      <TempNav />
      <Switch>
        <Route exact path='/landing' render={Landing} />
        <Route exact path='/dashboard' render={Dashboard} />
        <Route exact path='/profile' render={Profile} />
        <Route exact path='/flow' render={Graph} />
        <Route exact path='/test' render={ApiTests} />
      </Switch>
    </Router>
  );
};

export default App;
