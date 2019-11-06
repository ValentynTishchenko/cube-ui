import React from 'react';

import { UserTypes } from 'src/constants/users';
import UsersTable from './components/UsersTable';
import { UserListContainer, UserListTitle, CreateUserButtonContainer } from './UserList.styles';
import { UserListProps } from './UserList.types';

class UserList extends React.PureComponent<UserListProps> {
  private static readonly userType = UserTypes.TESTEE;

  onClick = () => {
    this.props.openModal();
  };

  render() {
    return (
      <UserListContainer>
        <UserListTitle>
          User List
          <CreateUserButtonContainer onClick={this.onClick}>
            <input type='button' value='+' />
          </CreateUserButtonContainer>
        </UserListTitle>
        <UsersTable userType={UserList.userType} />
      </UserListContainer>
    );
  }
}

export default UserList;