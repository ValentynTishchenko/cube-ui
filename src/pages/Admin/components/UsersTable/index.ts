import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions';

import UserTable from './UsersTable';

const mapStateToProps = () => ({
  users: []
});

const mapDispatchToProps = dispatch => ({
  isLoaded: false,
  fetchUsers: (userType) => {
    dispatch(fetchUsers(userType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);