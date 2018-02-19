import { combineReducers } from 'redux';
import jobs from './jobs';
import jobDetail from './jobDetail';

const rootReducer = combineReducers({
  jobs,
  jobDetail
});

export default rootReducer;
