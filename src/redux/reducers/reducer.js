import { combineReducers } from 'redux';
import basicInfoReducer from './register/basic';
import educationReducer from './register/education';
import errorReducer from './global/error';
import createGroup from './group/createGroup';

export default combineReducers({
  basicInfo: basicInfoReducer,
  education: educationReducer,
  createGroup: createGroup,
  error: errorReducer,
});
