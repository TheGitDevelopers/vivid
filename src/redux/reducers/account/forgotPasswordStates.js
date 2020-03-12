const initialState = {
    success: null,
    loading: false,
    error: null,
}

const forgotPasswordStates = (state = initialState, action) => {
    switch (action.type) {
        case 'FORGOT_PASSWORD_PENDING':
            return { ...state, loading: true };
        case 'FORGOT_PASSWORD_SUCCESS':
            return { ...state, success: true, loading: false };
        case 'FORGOT_PASSWORD_ERR':
            return { ...state, success: false, err: action.payload, loading: false };
        default:
            return state;
    }
};

export default forgotPasswordStates;
