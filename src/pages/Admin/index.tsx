import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../../components';
import UsersTable from './components/UsersTable';
import { UserTypes } from '../../constants/users';
import { createTest } from './store/actions';

type AdminPageProps = {
  createTest: (ids) => void
};

class AdminPage extends React.PureComponent<AdminPageProps> {
  createTest = () => {
    //TODO real ids;
    this.props.createTest([1, 2, 3]);
  };

  createUser = () => {

  }

  render() {
    return (
      <Page>
        <button onClick={this.createTest}>create test</button>
        <button onClick={this.createUser}>create user</button>
        <UsersTable userType={UserTypes.TESTEE} />
      </Page>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  createTest: (ids) => {
    dispatch(createTest(ids));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);