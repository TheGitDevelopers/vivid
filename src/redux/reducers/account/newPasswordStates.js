const initialState = {
    success: null,
    loading: false,
    error: null,
}

const newPasswordStates = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_PASSWORD_PENDING':
            return { ...state, loading: true };
        case 'NEW_PASSWORD_SUCCESS':
            return { ...state, success: true, loading: false };
        case 'NEW_PASSWORD_ERR':
            return { ...state, success: false, err: action.payload, loading: false };
        default:
            return state;
    }
};

export default newPasswordStates;
