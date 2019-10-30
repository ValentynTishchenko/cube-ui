import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../../../store/user/actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => dispatch(login(email, password)),
});
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
