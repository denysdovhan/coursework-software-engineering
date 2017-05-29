import React from 'react';
import Filterer from '../containers/Filterer';
import NewEvent from '../containers/NewEvent';
import VisibleEventList from '../containers/VisibleEventList';

const styles = {
  maxWidth: '600px',
  width: '90%',
  margin: '1rem auto'
};

const Organizer = () => (
  <div style={styles}>
    <NewEvent />
    <Filterer />
    <VisibleEventList />
  </div>
);

export default Organizer;
