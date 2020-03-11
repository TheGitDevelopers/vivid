const initialState = {
  success: null,
  loading: false,
  error: null,
};

const createGroupStates = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_GROUP_PENDING':
      return { ...state, loading: true };
    case 'CREATE_GROUP_SUCCESS':
      return { ...state, success: true, loading: false };
    case 'CREATE_GROUP_ERR':
      return { ...state, success: false, err: action.payload, loading: false };
    default:
      return state;
  }
};

export default createGroupStates;
