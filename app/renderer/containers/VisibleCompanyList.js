import { connect } from 'react-redux';
import CompanyList from '../components/CompanyList';

const mapStateToProps = state => ({
  companies: state.companies,
});

export default connect(mapStateToProps)(CompanyList);