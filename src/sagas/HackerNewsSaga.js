import { put, takeLatest } from 'redux-saga/effects';
import {GET_HACKER_NEWS, RENDER_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

function* getHackerNewsSaga(action) {
    console.log("i am in Saga");
    yield put({ type: RENDER_HACKER_NEWS, payload: action.payload });
}

export default function* watchHackerNewsSaga() {
    yield takeLatest(GET_HACKER_NEWS, getHackerNewsSaga);
}
