import { TYPE_USERS } from '../actions/users';

const _initialState = {
    users: [],
    errors: [],
    loading: false,
}

export default function users(state = _initialState, action) {
    switch (action.type) {
        case TYPE_USERS.GET_USERS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case TYPE_USERS.GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload.users,
            }
        }
        case TYPE_USERS.GET_USERS_ERRORS: {
            return {
                ...state,
                errors: action.payload.errors,
            }
        }
        default: {
            return state;
        }
    }
}