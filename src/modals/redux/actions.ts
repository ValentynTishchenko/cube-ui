import { MODALS_NAMES_LIST } from '../constants';

export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (modalName: MODALS_NAMES_LIST) => ({
  type: OPEN_MODAL,
  payload: {
    modalName,
  }
});

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = (modalName: MODALS_NAMES_LIST) => ({
  type: CLOSE_MODAL,
  payload: {
    modalName,
  }
});