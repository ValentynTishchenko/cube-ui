import React from 'react';
import { ModalsContextProvider } from '../contexts/ModalContext';

class ModalManager extends React.PureComponent {
  state = {
    registeredModals: []
  };

  registrate = () => {
    console.log('registate');
  };

  render() {
    const { children } = this.props;
    const value = {
      registrate: this.registrate,
      ...this.state,
    };
    return (
      <ModalsContextProvider value={value}>
        {children}
      </ModalsContextProvider>
    );
  }
}

export default ModalManager;