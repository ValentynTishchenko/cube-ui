import React from 'react';
import { connect } from 'react-redux';
// import styled from '@emotion/styled';
import { getModalsState } from './redux/selectors';
import CreateUserModal from './components/CreateUserModal';
import { MODALS_NAMES_LIST } from './constants';


const registratedModalWindows = {
  [MODALS_NAMES_LIST.CREATE_USER]: CreateUserModal
};

type ModalManagerProps = {
  isModalWindowOpen: boolean;
  openedModalWindowName: string;
}

class ModalManager extends React.PureComponent<ModalManagerProps> {
  render() {
    const { isModalWindowOpen, openedModalWindowName } = this.props;
    console.log('isModalWindowOpen: ', isModalWindowOpen);
    const Modal = registratedModalWindows[openedModalWindowName];

    if (isModalWindowOpen && Modal) {
      return <Modal />;
    }

    return null;
  }
}

const mapStateToProps = state => {
  const { isModalWindowOpen, modalName: openedModalWindowName } = getModalsState(state);
  return {
    isModalWindowOpen,
    openedModalWindowName,
  };
};

export default connect(mapStateToProps)(ModalManager);