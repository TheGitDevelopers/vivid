const fetchLogin = (navigate) => (dispatch, getState) => {
    dispatch({ type: 'LOGIN_PENDING' })
    const { state: { basicInfo: { email, password } } } = getState();
    fetch('...',
        { // TODO
            method: "POST",
            body: JSON.stringify({ email, password })
        }
    )
        .then(res => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res,
            })
            navigate('login') //todo
        })
        .catch(err => dispatch({
            type: 'LOGIN_ERR',
            payload: err
        }))
}

export { fetchLogin }