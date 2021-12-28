export const TYPE_USERS = {
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_ERRORS: 'GET_USERS_ERRORS',
}

export const getUsersRequest = () => ({
    type: TYPE_USERS.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
    type: TYPE_USERS.GET_USERS_SUCCESS,
    payload: { users }
});

export const getUsersErrors = (errors) => ({
    type: TYPE_USERS.GET_USERS_ERRORS,
    payload: { errors }
});