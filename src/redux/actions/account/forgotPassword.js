const fetchForgotPassword = (email, navigate) => (dispatch) => {
    dispatch({ type: 'FORGOT_PASSWORD_PENDING' })
    fetch('...',
        { // TODO
            method: "POST",
            body: JSON.stringify({ email })
        }
    )
        .then(res => {
            dispatch({
                type: 'FORGOT_PASSWORD_SUCCESS',
                payload: res,
            })
            navigate('login') //todo
        })
        .catch(err => dispatch({
            type: 'FORGOT_PASSWORD_ERR',
            payload: err
        }))
}

export { fetchForgotPassword }