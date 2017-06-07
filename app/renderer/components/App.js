import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { ActionList, ActionSearch } from 'material-ui/svg-icons';
import Organizer from './Organizer';
import Search from './Search';

// @todo: use react-router
/*const App = () => (
  <Tabs>
    <Tab icon={<ActionList />} label="Organizer">
      <Organizer />
    </Tab>
    <Tab icon={<ActionSearch />} label="Search">
      <Search />
    </Tab>
  </Tabs>
);*/

const App = () => (
  <Router>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/">Organizer</Link>
      <Link to="/search">Search</Link>
      <hr />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={Organizer} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);

export default App;
