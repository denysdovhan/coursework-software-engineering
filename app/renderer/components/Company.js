import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

import StatusIcon from 'material-ui/svg-icons/action/check-circle';
import CreatedAtIcon from 'material-ui/svg-icons/action/date-range';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import PersonIcon from 'material-ui/svg-icons/social/person';
import OccupationIcon from 'material-ui/svg-icons/places/business-center';

const styles = {
  listStyle: 'none',
  margin: '1rem auto',
};

const Company = ({
  name, officialName, edrpou, address, mainPerson, occupation, status, createdAt
}) => (
  <li style={styles}>
    <Card>
      <CardTitle actAsExpander showExpandableButton title={name || officialName} subtitle={edrpou} />
      <CardText expandable>
        <List>
          <ListItem disabled primaryText={status} leftIcon={<StatusIcon />} />
          <ListItem disabled primaryText={moment(createdAt).format('MMMM Do YYYY, h:mm:ss')} leftIcon={<CreatedAtIcon />} />
          <ListItem disabled primaryText={address} leftIcon={<LocationIcon />} />
          <ListItem disabled primaryText={mainPerson} leftIcon={<PersonIcon />} />
          <ListItem disabled primaryText={occupation} leftIcon={<OccupationIcon />} />
        </List>
      </CardText>
    </Card>
  </li>
);

Company.propTypes = {
  address: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  edrpou: PropTypes.string.isRequired,
  mainPerson: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  officialName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Company;
