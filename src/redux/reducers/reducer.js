import { combineReducers } from 'redux';
import basicInfoReducer from './register/basic';
import educationReducer from './register/education';
import registerFetchStates from './register/registerFetchStates';
import errorReducer from './global/error';

export default combineReducers({
  basicInfo: basicInfoReducer,
  education: educationReducer,
  registerFetchStates: registerFetchStates,
  error: errorReducer,
});
