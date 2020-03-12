import { combineReducers } from 'redux';
import basicInfoReducer from './register/basic';
import educationReducer from './register/education';
import errorReducer from './global/error';
import meetingReducer from './meeting/meeting';

export default combineReducers({
  basicInfo: basicInfoReducer,
  education: educationReducer,
  error: errorReducer,
  meeting: meetingReducer,
});
