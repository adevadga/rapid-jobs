const jobDetail = (state = {}, action) => {
    switch (action.type) {
        case "JOB_FETCH_SUCCEEDED":
            return Object.assign({}, state, {jobDetail: action.data});
        case "JOB_FETCH_FAILED":
            return Object.assign({}, state, {jobDetail: action.data});
        case "CLEAR_JOB_DETAIL":
            return { ...state, jobDetail: null };
        default:
            return state;
    }
};

export default jobDetail;
