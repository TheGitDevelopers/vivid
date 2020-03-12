import { combineReducers } from 'redux';
import basicInfoReducer from './register/basic';
import educationReducer from './register/education';
import registerStates from './register/registerStates';
import loginStates from './account/loginStates';
import newPasswordStates from './account/newPasswordStates';
import forgotPasswordStates from './account/forgotPasswordStates';
import errorReducer from './global/error';
import meetingReducer from './meeting/meeting';

export default combineReducers({
  basicInfo: basicInfoReducer,
  education: educationReducer,
  registerStates: registerStates,
  loginStates: loginStates,
  newPasswordStates: newPasswordStates,
  forgotPasswordStates: forgotPasswordStates,
  error: errorReducer,
  meeting: meetingReducer,
});
