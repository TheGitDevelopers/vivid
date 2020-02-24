const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INPUT_ERROR':
      return { isError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
