import { connect } from 'react-redux';

import { fetchUsers } from 'src/pages/Admin/store/actions';
import { getUserPageStore } from 'src/pages/Admin/store/select';
import UserTable from './UsersTable';

const mapStateToProps = store => {
  const { isLoaded, users } = getUserPageStore(store);
  return {
    isLoaded,
    users,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userType) => {
    dispatch(fetchUsers(userType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);