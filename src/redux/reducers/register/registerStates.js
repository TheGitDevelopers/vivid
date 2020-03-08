const initialState = {
    success: null,
    loading: false,
    error: null,
}

const registerStates = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_ACCOUNT_PENDING':
            return { ...state, loading: true };
        case 'CREATE_ACCOUNT_SUCCESS':
            return { ...state, success: true, loading: false };
        case 'CREATE_ACCOUNT_ERR':
            return { ...state, success: false, err: action.payload, loading: false };
        default:
            return state;
    }
};

export default registerStates;
