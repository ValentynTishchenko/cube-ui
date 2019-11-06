import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { getModalsState } from './redux/selectors';

const TestWindow = styled.section`
  background: black;
  width: 100vw;
  height: 100vh;
`;

const registratedModalWindows = {
  kek: TestWindow
};

type ModalManagerProps = {
  isModalWindowOpen: boolean;
  openedModalWindowName: string;
}

class ModalManager extends React.PureComponent<ModalManagerProps> {
  render() {
    console.log('ModalManager');
    const { isModalWindowOpen, openedModalWindowName } = this.props;
    const Modal = registratedModalWindows[openedModalWindowName];

    if (!isModalWindowOpen || !Modal) {
      return null;
    }
    console.log('ModalManager open');
    return <Modal />;
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