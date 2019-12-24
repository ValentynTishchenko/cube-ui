import { handleActions } from 'redux-actions';
import { OPEN_MODAL, CLOSE_MODAL } from './actions';

export type initialStateType = {
  isModalWindowOpen: boolean,
  modalName: string,
}

export const initialState = {
  isModalWindowOpen: false,
  modalName: null,
};

export default handleActions({
  [OPEN_MODAL]: (store, action) => {
    const modalName = action.payload.modalName;
    return {
      ...store,
      isModalWindowOpen: true,
      modalName
    };
  },
  [CLOSE_MODAL]: (store, action) => {
    const modalName = action.payload.modalName;
    console.log('modalName');
    return {
      ...store,
      isModalWindowOpen: false,
      modalName
    };
  },
}, initialState);