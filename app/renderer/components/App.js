import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import AddTask from '../containers/AddTask';
import VisibleTaskList from '../containers/VisibleTaskList';

import '../style.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <AddTask />
      <VisibleTaskList />
    </div>
  </MuiThemeProvider>
);

export default App;
