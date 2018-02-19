import { JOB_ACTIONS } from '../consts/actionTypes';

const jobDetail = (state = {}, action) => {
    switch (action.type) {
        case JOB_ACTIONS.JOB_FETCH_SUCCEEDED:
            return Object.assign({}, state, {jobDetail: action.data});
        case JOB_ACTIONS.JOB_FETCH_FAILED:
            return Object.assign({}, state, jobDetail: null);
        case JOB_ACTIONS.CLEAR_JOB_DETAIL:
            return { ...state, jobDetail: null };
        default:
            return state;
    }
};

export default jobDetail;
