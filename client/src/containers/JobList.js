import { connect } from 'react-redux';
import { viewJob, fetchJobs } from '../actions/jobActions';
import JobList from '../components/JobList';

const mapStateToProps = state => ({
  jobs: state.jobs,
});

const mapDispatchToProps = dispatch => ({
  viewJob: (jobId) => {
    dispatch(viewJob(jobId));
  },
  fetchJobs: () => {
    dispatch(fetchJobs());
  }
});

/*
Connect JobList with store - redux
 */
export default connect(mapStateToProps, mapDispatchToProps)(JobList);
