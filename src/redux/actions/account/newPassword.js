const fetchNewPassword = (password, navigate) => (dispatch) => {
    dispatch({ type: 'NEW_PASSWORD_PENDING' })
    fetch('...',
        { // TODO
            method: "POST",
            body: JSON.stringify({ password })
        }
    )
        .then(res => {
            dispatch({
                type: 'NEW_PASSWORD_SUCCESS',
                payload: res,
            })
            navigate('login') //todo
        })
        .catch(err => dispatch({
            type: 'NEW_PASSWORD_ERR',
            payload: err
        }))
}

export { fetchNewPassword }