import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_HACKER_NEWS, RENDER_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';
import { GET_FEEDS } from '../Utils/Constant';
import { RestClient } from '../Utils/RestClient';

function* getHackerNewsSaga(action) {
    const requestObject = {
        url: GET_FEEDS
    };
    const response = yield call(RestClient.get, requestObject);
    yield put({ type: RENDER_HACKER_NEWS, payload: response });
}

export default function* watchHackerNewsSaga() {
    yield takeLatest(GET_HACKER_NEWS, getHackerNewsSaga);
}
