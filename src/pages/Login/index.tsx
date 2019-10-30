import React from 'react';

import LoginForm from './components/LoginForm';
import { Page } from '../../components/Page';

class LoginPage extends React.PureComponent {
  render() {
    return (
      <Page>
        <LoginForm />
      </Page>
    );
  }
}

export default LoginPage;