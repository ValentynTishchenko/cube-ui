import { handleActions } from 'redux-actions';
import { FETCH_USERS } from './actions';
import { UserModel } from 'src/models/User';

export type initialUserPageStateType = {
  isLoaded: boolean,
  users: UserModel[],
}
export type initialStateType = {
  usersPage: initialUserPageStateType,
}

export const initialState: initialStateType = {
  usersPage: {
    isLoaded: false,
    users: [],
  },
};

export default handleActions({
  [FETCH_USERS.REQUEST]: (store) => {
    return {
      ...store,
      usersPage: {
        ...store.usersPage,
        isLoaded: false,
        users: [],
      },
    };
  },
  [FETCH_USERS.SUCCESS]: (store) => {
    //TODO remove it
    const users: UserModel[] = [
      { id: 1, name: 'Valentyn', lastName: 'Tishenko', description: 'some very long text', isOnline: true },
      { id: 2, name: 'Valentyn', lastName: 'Tishenko', description: 'some very long text', isOnline: false },
      { id: 3, name: 'Valentyn', lastName: 'Tishenko', description: 'some very long text', isOnline: true },
    ];

    return {
      ...store,
      usersPage: {
        ...store.usersPage,
        isLoaded: true,
        users,
      },
    };
  },
}, initialState);