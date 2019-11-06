import { connect } from 'react-redux';
// import { createTest } from '../../store/actions';
import UserList from './UserList';

const mapStateToProps = () => ({});
// const mapDispatchToProps = dispatch => ({
const mapDispatchToProps = () => ({
  createUser: () => {
    console.log('create user');
  },
  createTest: (ids) => {
    console.log('create test', ids);
    // dispatch(createTest(ids));
  },
  openModal: () => {
    console.log('openModal');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);