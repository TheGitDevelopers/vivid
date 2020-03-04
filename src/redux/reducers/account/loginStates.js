const initialState = {
    success: null,
    loading: false,
    error: null,
}

const loginStates = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return { ...state, loading: true };
        case 'LOGIN_SUCCESS':
            return { ...state, success: true, loading: false };
        case 'LOGIN_ERR':
            return { ...state, success: false, err: action.payload, loading: false };
        default:
            return state;
    }
};

export default loginStates;
