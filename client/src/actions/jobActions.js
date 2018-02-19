import { JOB_ACTIONS } from '../consts/actionTypes';

export const addJob = jobData => ({
  type: JOB_ACTIONS.ADD_JOB,
  jobData
});

export const viewJob = jobId => ({
  type: JOB_ACTIONS.VIEW_JOB,
  jobId
});

export const fetchJobs = () => ({
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

