import React from 'react';

import { UserTypes } from 'src/constants/users';
import UsersTable from './components/UsersTable';
import { UserListContainer, UserListTitle } from './UserList.styles';
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
          Список користувачів
          {/*<CreateUserButtonContainer onClick={this.onClick}>*/}
            {/*<input type='button' value='+' />*/}
          {/*</CreateUserButtonContainer>*/}
        </UserListTitle>
        <UsersTable userType={UserList.userType} />
      </UserListContainer>
    );
  }
}

export default UserList;