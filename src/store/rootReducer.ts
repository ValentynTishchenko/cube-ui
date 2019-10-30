import { combineReducers } from 'redux';
import user from './user/reducer';
import admin from '../pages/Admin/store/reducers';

export default combineReducers({
  user, admin
});