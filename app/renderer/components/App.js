import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { ActionList, ActionSearch } from 'material-ui/svg-icons';
import Organizer from './Organizer';
import Search from './Search';

// @todo: use react-router
const App = () => (
  <Tabs initialSelectedIndex={1}>
    <Tab icon={<ActionList />} label="Organizer">
      <Organizer />
    </Tab>
    <Tab icon={<ActionSearch />} label="Search">
      <Search />
    </Tab>
  </Tabs>
);

export default App;
