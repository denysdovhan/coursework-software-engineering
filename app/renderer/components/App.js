import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { ActionList, ActionSearch } from 'material-ui/svg-icons';
import Organizer from './Organizer';

const App = () => (
  <Tabs>
    <Tab icon={<ActionList />} label="Organizer">
      <Organizer />
    </Tab>
    <Tab icon={<ActionSearch />} label="Search">
      <h2>Search goes here</h2>
    </Tab>
  </Tabs>
);

export default App;
