import React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import EventIcon from 'material-ui/svg-icons/action/event';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const styles = {
  textDecoration: 'none',
};

const ToggleMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="white" /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <Link to="/" style={styles}>
      <MenuItem primaryText="Organizer" leftIcon={<EventIcon />} />
    </Link>
    <Link to="/search" style={styles}>
      <MenuItem primaryText="Search" leftIcon={<SearchIcon />} />
    </Link>
  </IconMenu>
);

export default ToggleMenu;
