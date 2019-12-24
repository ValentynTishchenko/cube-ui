import { handleActions } from 'redux-actions';
import { FETCH_USERS } from './actions';
import { UserModel } from 'src/models/User';

const fakeDesk = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
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
      { id: 1, name: 'Valentyn', lastName: 'Tishenko', description: fakeDesk, isOnline: true },
      { id: 2, name: 'Valentyn', lastName: 'Tishenko', description: fakeDesk, isOnline: false },
      { id: 3, name: 'Valentyn', lastName: 'Tishenko', description: fakeDesk, isOnline: true },
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