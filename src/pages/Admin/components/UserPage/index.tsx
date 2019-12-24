import { connect } from 'react-redux' ;
// import { createTest } from '../../store/actions';
import UserList from './UserList';
import { openModal } from 'src/modals/redux/actions';
import { MODALS_NAMES_LIST } from 'src/modals/constants';

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


export default connect(mapStateToProps, mapDispatchToProps)(UserList);