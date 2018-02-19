import * as actions from '../../../client/src/actions/jobActions';
import { JOB_ACTIONS } from '../../../client/src/consts/actionTypes';

describe('Job actions', () => {
  it('should create an action to add a Job', () => {
    const jobData = {
        jobId: 1,
        jobTitle: "Software Engineer",
        companyName: "Windmill Inc.",
    }
    const expectedAction = {
      type: JOB_ACTIONS.ADD_JOB,
      jobData
    }
    expect(actions.addJob(jobData)).toEqual(expectedAction);
  });
  
  it('should create an action to view a Job', () => {
    const jobId = 1;
    const expectedAction = {
      type: JOB_ACTIONS.VIEW_JOB,
      jobId
    }
    expect(actions.viewJob(jobId)).toEqual(expectedAction);
  });
  
  it('should create an action to load Job detail', () => {
    const jobId = 1;
    const expectedAction = {
      type: JOB_ACTIONS.LOAD_JOB_DETAIL,
      jobId
    }
    expect(actions.loadJobDetail(jobId)).toEqual(expectedAction);
  });
  
  it('should create an action to clear Job detail', () => {
    const jobId = 1;
    const expectedAction = {
      type: JOB_ACTIONS.CLEAR_JOB_DETAIL,
      jobId
    }
    expect(actions.clearJobDetail(jobId)).toEqual(expectedAction);
  });
})