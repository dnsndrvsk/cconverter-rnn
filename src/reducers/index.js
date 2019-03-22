import { combineReducers } from 'redux';

import currenciesReducer from './currenciesReducer';
import userReducer from './userReducer';


export default combineReducers({
  currenciesReducer,
  userReducer
});
