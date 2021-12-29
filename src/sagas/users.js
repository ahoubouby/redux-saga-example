import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
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


function* watchGetUserRequest() {
    yield takeEvery(TYPE_USERS.GET_USERS_REQUEST, getUsers);
}

function* createUser({ payload }) {
    try {
        yield call(usersApi.createUser, payload);
        yield call(getUsers);
    } catch (e) {
        console.log(e)
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(TYPE_USERS.CREATE_USER_REQUEST, createUser);
}

function* deleteUser(id){
    yield call(usersApi.deleteUser, id);
    yield call(getUsers);
}
function* watchDeleteUserRequest(){
    while(true){
        const { payload } = yield take(TYPE_USERS.DELETE_USER_REQUEST);
        yield call(deleteUser, payload);
    }
}
const userSagas = [
    fork(watchGetUserRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest),
]

export default userSagas;