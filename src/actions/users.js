export const TYPE_USERS = {
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_ERRORS: 'GET_USERS_ERRORS',
    CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
    DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
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

export const createUserRequest = (user) => {
    return { type: TYPE_USERS.CREATE_USER_REQUEST, payload: { user } };
}

export const deleteUserRequest = (id) => {
    return {type: TYPE_USERS.DELETE_USER_REQUEST, payload: { id }};
}