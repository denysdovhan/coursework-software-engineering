import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompanies } from '../actions';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SearchResults from './SearchResults';
import BackgroundMessage from './BackgroundMessage';
import PrimaryTextField from './PrimaryTextField';
import ExpandIcon from 'material-ui/svg-icons/navigation/expand-more';
import SearchIcon from 'material-ui/svg-icons/action/search';
import EventIcon from 'material-ui/svg-icons/action/event';
import CompaniesIcon from 'material-ui/svg-icons/social/people';

const styles = {
  maxWidth: '600px',
  width: '90%',
  margin: '1rem auto'
};

class Search extends React.Component {
  static propTypes = {
    fetchCompanies: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    isFetching: false,
  }

  state = {
    showSearchOptions: false,
    searchQuery: '',
    isSearchingFor: 'companies',
  }

  componentDidMount() {
    this.props.fetchCompanies(this.state.searchQuery);
  }

  handleSearchOptionsOpen = e => {
    // This prevents ghost click.
    e.preventDefault();

    this.setState({
      showSearchOptions: true,
      popoverAnchorEl: e.currentTarget,
    });
  }

  handleSearchOptionsClose = () => {
    this.setState({
      showSearchOptions: false,
    });
  };

  handleSearchOptionsChange = (e, newValue) => {
    this.setState({
      showSearchOptions: false,
      isSearchingFor: newValue,
    });
  }

  handleOnChange = (e, newValue) => {
    this.setState({
      searchQuery: newValue,
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    if (!this.state.searchQuery.trim()) return;
    this.props.fetchCompanies(this.state.searchQuery);
  }
  render() {
    const { searchQuery, showSearchOptions, isSearchingFor, popoverAnchorEl } = this.state;
    const hintText = `Search ${isSearchingFor}…`;

    return (
      <div style={styles}>
        <PrimaryTextField
          value={searchQuery}
          hintText={hintText}
          onSubmit={this.handleOnSubmit}
          onChange={this.handleOnChange}
          secondaryLabel="Expand"
          primaryLabel="Add"
          secondaryIcon={<ExpandIcon />}
          primaryIcon={<SearchIcon color="white" />}
          onSecodaryClick={this.handleSearchOptionsOpen}
        />
        <Popover
          open={showSearchOptions}
          anchorEl={popoverAnchorEl}
          onRequestClose={this.handleSearchOptionsClose}
        >
          <Menu onChange={this.handleSearchOptionsChange}>
            <MenuItem value="companies" disabled={isSearchingFor === 'companies'} leftIcon={<CompaniesIcon />}>
              Companies
            </MenuItem>
            <MenuItem value="events" disabled={isSearchingFor === 'events'} leftIcon={<EventIcon />}>
              Events
            </MenuItem>
          </Menu>
        </Popover>
        {this.props.isFetching ? (
          <BackgroundMessage loading label="Loading…">
            It usually takes some time to fetch data from servers.
          </BackgroundMessage>
        ) : (
          <SearchResults searchFor={isSearchingFor} query={searchQuery} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.companies,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCompanies: query => dispatch(fetchCompanies(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
