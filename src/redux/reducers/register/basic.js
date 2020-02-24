
const basicInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PERSON_NAME':
      return { name: action.payload };
    case 'SET_PERSON_SURNAME':
      return { surname: action.payload };
    case 'SET_PERSON_EMAIL':
      return { email: action.payload };
    case 'SET_PERSON_PASSWORD':
      return { pass: action.payload };
    case 'SET_PERSON_IMAGE':
      return { image: action.payload };
    case 'SET_PERSON_SEX':
      return { sex: action.payload };
    default:
      return state;
  }
};

export default basicInfoReducer;
