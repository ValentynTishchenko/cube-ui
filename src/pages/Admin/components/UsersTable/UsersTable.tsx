import React from 'react';
import { UserTypes } from '../../../../constants/users';

type UsersTableProps = {
  isLoaded: boolean
  users: [],
  fetchUsers: (userType) => void
  userType?: UserTypes
}

class UsersTable extends React.PureComponent<UsersTableProps> {
  componentDidMount(): void {
    const { fetchUsers, userType, isLoaded } = this.props;
    if (!isLoaded) {
      fetchUsers(userType);
    }
  }

  render() {
    return (
      <section>
        UsersTable
      </section>
    );
  }
}

export default UsersTable;