import { fork } from 'redux-saga/effects';
import watchHackerNewsSaga from './HackerNewsSaga';

export default function* rootSagas() {
    yield* [
        fork(watchHackerNewsSaga),
    ];
}
