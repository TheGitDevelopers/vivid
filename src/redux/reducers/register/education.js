
const INITIAL_STATE = {
  isStudent: true,
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_STUDENT':
      return { ...state, isStudent: action.payload };
    case 'SET_PERSON_SQL':
      return { ...state, personSql: action.payload };
    case 'SET_PERSON_SUBJECT':
      return { ...state, personSubject: action.payload };
    case 'SET_PERSON_SEMESTER':
      return { ...state, personSemester: action.payload };
    default:
      return state;
  }
};

export default educationReducer;
