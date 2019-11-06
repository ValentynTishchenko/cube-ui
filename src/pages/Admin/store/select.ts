import { initialUserPageStateType } from './reducers';

export const getUserPageStore = (store): initialUserPageStateType => store.admin.usersPage;