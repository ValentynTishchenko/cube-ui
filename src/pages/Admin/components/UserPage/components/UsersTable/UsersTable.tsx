import React from 'react';

import { UserTypes } from 'src/constants/users';
import TableFilter from 'src/components/common/TableFilter';
import { filterOption } from 'src/components/common/TableFilter/TableFilter.types';
import { UserModel } from 'src/models/User';
import { UsersTableContainer, Actions } from './UserTable.style';
import UserCard from './UserCard';
import { connect } from 'react-redux';
import { openModal } from 'src/modals/redux/actions';
import { MODALS_NAMES_LIST } from 'src/modals/constants';

type UsersTableProps = {
  isLoaded: boolean
  users: UserModel[],
  fetchUsers: (userType) => void
  openModal: () => void
  userType?: UserTypes
}

class UsersTable extends React.PureComponent<UsersTableProps> {
  private readonly filterOptions: filterOption[] = [
    { value: 'all', label: 'Всі', isActive: true },
    { value: 'active', label: 'Активні', isActive: false },
    { value: 'notActive', label: 'Не Активні', isActive: false },
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

  onClick = () => {
    this.props.openModal();
  };

  render() {
    const { isLoaded, users } = this.props;

    return (
      <UsersTableContainer>
        <Actions onClick={this.onClick}>Create user</Actions>
        <TableFilter
          onClick={this.onFilterClick}
          filterOptions={this.filterOptions}>
        </TableFilter>
        {isLoaded && this.renderUserCards(users)}
      </UsersTableContainer>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
// const mapDispatchToProps = () => ({
  createUser: () => {
    console.log('create user');
  },
  createTest: (ids) => {
    console.log('create test', ids);
    // dispatch(createTest(ids));
  },
  openModal: () => dispatch(openModal(MODALS_NAMES_LIST.CREATE_USER))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);