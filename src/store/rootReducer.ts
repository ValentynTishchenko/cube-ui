import { combineReducers } from 'redux';
import user from './user/reducer';
import admin from '../pages/Admin/store/reducers';
import modals from 'src/modals/redux/reducers';

export default combineReducers({
  user, admin, modals
});