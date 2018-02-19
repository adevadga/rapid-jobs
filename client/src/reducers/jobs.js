import { JOB_ACTIONS } from '../consts/actionTypes';

function getJob(jobId, jobs) {
  for (let job in jobs) {
      if (job.jobId === jobId) {
          return job;
      }
  }
}
export default (state = [], action) => {
  switch (action.type) {
    case JOB_ACTIONS.ADD_JOB: 
        return [
       ...state,
       {
         jobId: action.job.jobId,
         jobTitle: action.job.jobTitle,
         companyName: action.job.companyName,
         jobDescription: action.job.jobDescription,
         avatar: action.job.avatar,
       }
     ]  
    case "JOBS_DATA_FETCH_SUCCEEDED":
        return  [...action.data];
    case "JOBS_DATA_FETCH_FAILED":
        return  [...action.data];
    default:
      return state;
  }
};
