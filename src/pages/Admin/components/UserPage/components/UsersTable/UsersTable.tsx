import React from 'react';

import { UserTypes } from 'src/constants/users';
import TableFilter from 'src/components/common/TableFilter';
import { filterOption } from 'src/components/common/TableFilter/TableFilter.types';
import { UserModel } from 'src/models/User';
import { UsersTableContainer } from './UserTable.style';
import UserCard from './UserCard';

type UsersTableProps = {
  isLoaded: boolean
  users: UserModel[],
  fetchUsers: (userType) => void
  userType?: UserTypes
}

class UsersTable extends React.PureComponent<UsersTableProps> {
  private readonly filterOptions: filterOption[] = [
    { value: 'all', label: 'All', isActive: false },
    { value: 'active', label: 'Active', isActive: true },
    { value: 'notActive', label: 'Not active', isActive: false },
  ];

  componentDidMount(): void {
    const { fetchUsers, userType, isLoaded } = this.props;

    if (!isLoaded) {
      fetchUsers(userType);
    }
  }

  onFilterClick = (value: string) => {
    console.log(value);
  };

  renderUserCards = (users) => {
    return (
      <ul>
        {users.map((user: UserModel): React.ReactNode => (<li key={user.id}><UserCard userData={user} /></li>))}
      </ul>
    );
  };

  render() {
    const { isLoaded, users } = this.props;

    return (
      <UsersTableContainer>
        <TableFilter
          onClick={this.onFilterClick}
          filterOptions={this.filterOptions}
        />
        {isLoaded && this.renderUserCards(users)}
      </UsersTableContainer>
    );
  }
}

export default UsersTable;