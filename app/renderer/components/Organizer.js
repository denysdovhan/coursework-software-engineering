import React from 'react';
import Filterer from '../containers/Filterer';
import NewEvent from '../containers/NewEvent';
import VisibleEventList from '../containers/VisibleEventList';
import AppHeader from './AppHeader';

const styles = {
  maxWidth: '600px',
  width: '90%',
  margin: '1rem auto',
  marginTop: '80px',
};

const Organizer = () => (
  <div>
    <AppHeader title="Organizer" />
    <div style={styles}>
      <NewEvent />
      <Filterer />
      <VisibleEventList />
    </div>
  </div>
);

export default Organizer;
