
const INITIAL_STATE = {
  isStudent: true,
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_STUDENT':
      return { isStudent: action.payload };
    case 'SET_PERSON_SQL':
      return { personSql: action.payload };
    case 'SET_PERSON_SUBJECT':
      return { personSubject: action.payload };
    case 'SET_PERSON_SEMESTER':
      return { personSemester: action.payload };
    default:
      return state;
  }
};

export default educationReducer;
