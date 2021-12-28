import { all } from 'redux-saga/effects';
import userSagas from './users';

export default function* rootSags() {
    yield all([
        ...userSagas
    ]);
}