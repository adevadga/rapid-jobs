import {takeEvery} from "redux-saga";
import {put, call, fork} from "redux-saga/effects";
import {fetchJobsData, getJob} from './serviceUtil';
import { JOB_ACTIONS } from '../consts/actionTypes';

function* fetchJobs(action) {
    const data = yield call(fetchJobsData, action);
    if (data) {
        yield put({type: JOB_ACTIONS.JOBS_DATA_FETCH_SUCCEEDED, data});
    } else {
        yield put({type: JOB_ACTIONS.JOBS_DATA_FETCH_FAILED, ex: "ex"});
    }
}

export function* jobsDataSaga() {
    yield* takeEvery(JOB_ACTIONS.FETCH_JOBS, fetchJobs);
}

function* loadJobDetail(action) {
    const data = yield call(getJob, action.jobId);
    if (data) {
        yield put({type: JOB_ACTIONS.JOB_FETCH_SUCCEEDED, data});
    } else {
        yield put({type: JOB_ACTIONS.JOB_FETCH_FAILED, ex: "ex"});
    }
}

export function* jobDetailSaga() {
    yield* takeEvery(JOB_ACTIONS.LOAD_JOB_DETAIL, loadJobDetail);
}

export function* rootSaga() {
    yield [
        fork(jobsDataSaga),
        fork(jobDetailSaga)
    ];
}