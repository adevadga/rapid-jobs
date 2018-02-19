import { JOB_ACTIONS } from '../consts/actionTypes';

export const viewJob = name => ({
  type: JOB_ACTIONS.VIEW_JOB,
  name
});

export const fetchJobs = name => ({
  type: JOB_ACTIONS.FETCH_JOBS,
  name
});

export const fetchJob = jobId => ({
  type: JOB_ACTIONS.FETCH_JOB,
  jobId
});

export const clearJobDetail = jobId => ({
  type: JOB_ACTIONS.CLEAR_JOB_DETAIL,
  jobId
});

