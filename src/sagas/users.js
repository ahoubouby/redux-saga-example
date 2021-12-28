import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as userActions from '../actions/users';
import * as usersApi from '../apis/users';

const { TYPE_USERS, getUsersSuccess } = userActions;

function* getUsers() {
    try {
        const result = yield call(usersApi.getUsers);
        yield put(getUsersSuccess(result.data));
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