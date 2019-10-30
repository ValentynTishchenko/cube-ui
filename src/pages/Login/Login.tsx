import React from 'react';

import LoginForm from './components/LoginForm';
import { Page } from '../../components'; //TODO add alias "src"

class Login extends React.PureComponent {
  render() {
    return (
      <Page>
        <LoginForm />
      </Page>
    );
  }
}

export default Login;