
const basicInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PERSON_NAME':
      return { ...state, name: action.payload };
    case 'SET_PERSON_SURNAME':
      return { ...state, surname: action.payload };
    case 'SET_PERSON_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PERSON_PASSWORD':
      return { ...state, pass: action.payload };
    case 'SET_PERSON_IMAGE':
      return { ...state, image: action.payload };
    case 'SET_PERSON_SEX':
      return { ...state, sex: action.payload };
    default:
      return state;
  }
};

export default basicInfoReducer;
