import styled from '@emotion/styled';
import React, { FormEvent } from 'react';
import { Input } from '../../../../components/common';
import { colors } from '../../../../styles/variables';

const Form = styled.form`
  border: 1px solid ${colors.white};
  border-radius: 4px;
  margin: 0 auto;
  padding: 10px 30px;
  width: 400px;
  height: 250px;
  text-align: center;
  
  h2 {
    color: ${colors.white};
  }
  
  p {
    margin: 25px 0 ;
  }
  
  input {
    width: 100%;
    font-size: 16px;
  }
`;

const LoginButton = styled.button`
  font-size: 24px;
  width: 180px;
  color: white;
  padding: 4px;
  background: ${colors.sprayDark};
  border: none;
`;

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
}

type LoginFormState = {
  email: string;
  password: string;
}

type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

class LoginForm extends React.PureComponent<LoginFormProps, LoginFormState> {
  state = {
    email: 'test@email.com',
    password: 'secretpassword',
  };

  onChange = (e: OnChangeEvent) => {
    const { value, name } = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // TODO: compare this methods
    // this.setState({
    //   [name]: value
    // } as Pick<State, keyof State>);

  };

  onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <h2>
          Увійдіть, щоб перейти до адмінської панелі:
        </h2>
        <p>
          <Input onChange={this.onChange} name='email' type='email' placeholder='email' value={email} />
        </p>
        <p>
          <Input onChange={this.onChange} name='password' type='password' placeholder='password'
                 value={password} />
        </p>
        <LoginButton>Login</LoginButton>
      </Form>
    );
  }
}

export default LoginForm;