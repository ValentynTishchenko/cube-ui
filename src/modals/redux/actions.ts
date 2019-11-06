export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = (modalName: string) => ({
  type: OPEN_MODAL,
  payload: {
    modalName,
  }
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = (modalName: string) => ({
  type: CLOSE_MODAL,
  payload: {
    modalName,
  }
});