import React from 'react';

type ModalManagerProps = {
  shouldModalRender: boolean;
}

class ModalManager extends React.PureComponent<ModalManagerProps> {

  render() {
    if (this.props.shouldModalRender){
      return
    }
    return null;
  }
}

export default ModalManager;