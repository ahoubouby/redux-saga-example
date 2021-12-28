import { call, fork, takeEvery } from 'redux-saga/effects';
import * as userActions from '../actions/users';
import * as usersApi from '../apis/users';

const { TYPE_USERS } = userActions;

function* getUsers() {
    try {
        const users = yield call(usersApi.getUsers);
        console.log('users', users);
    } catch (error) {
        console.log(error);
    }
}


function* watchGetUserRequest () {
    yield takeEvery(TYPE_USERS.GET_USERS_REQUEST, getUsers);
}

const userSagas = [
    fork(watchGetUserRequest),
]

export default userSagas;