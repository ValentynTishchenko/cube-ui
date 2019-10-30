import styled from '@emotion/styled';
import React, { FormEvent } from 'react';

const Form = styled.form`
  border-radius: 4px;
  margin: 0 auto;
  padding: 10px;
  width: 400px;
  height: 300px;
  background: #${'7C94A8'};
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
        <input onChange={this.onChange} name='email' type='email' placeholder='email' value={email} />
        <input onChange={this.onChange} name='password' type='password' placeholder='password'
               value={password} />
        <button>Login</button>
      </Form>
    );
  }
}

export default LoginForm;