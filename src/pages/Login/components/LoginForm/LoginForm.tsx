import styled from '@emotion/styled';
import React from 'react';
import { Input } from '../../../../components/common';
import { colors } from '../../../../styles/variables';
import axios from 'axios';

const Form = styled.form`
  // border: 1px solid ${colors.white};
  border-radius: 4px;
  margin: 130px auto;
  padding: 10px 30px;
  width: 500px;
  height: 300px;
  text-align: center;

  h2 {
  margin-bottom: 50px;
    font-size: 32px;
    color: ${colors.white};
  }

  p {
    margin: 25px 0;
  }

  input {
    height: 60px;
    width: 100%;
    font-size: 24px;
  }
`;

const LoginButton = styled.button`
  height: 60px;
  font-size: 24px;
  //width: 180px;
  width: 100%;
  color: white;
  padding: 4px;
  background: ${colors.mountainMeadow};
  border: none;
`;

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

type LoginFormState = {
  email: string;
  password: string;
};

class LoginForm extends React.PureComponent<LoginFormProps, LoginFormState> {
  state = {
    email: 'test@email.com',
    password: 'secretpassword',
  };

  // onChange = () => {
  //   const { value, name } = e.target;
  //
  //   this.setState(prevState => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   // TODO: compare this methods
  //   // this.setState({
  //   //   [name]: value
  //   // } as Pick<State, keyof State>);
  // };

  onFormSubmit = e => {
    axios
      .post('http://localhost/api/auth/login', {
        username: 'expert',
        password: 'expert',
      })
      .then(res => {
        console.log('res:', res);
      });

    e.preventDefault();
    return false;
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <h2>Увійдіть, щоб перейти до адмінської панелі:</h2>
        <p>
          <Input name="email" type="email" placeholder="email" value={email} />
        </p>
        <p>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={password}
          />
        </p>
        <LoginButton>Login</LoginButton>
      </Form>
    );
  }
}

export default LoginForm;
