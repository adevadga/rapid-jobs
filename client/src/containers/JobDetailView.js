import { connect } from 'react-redux';
import { fetchJob, clearJobDetail } from '../actions/jobActions';
import JobDetailView from '../components/JobDetailView';

const mapStateToProps = state => ({
  jobDetail: state.jobDetail
});

const mapDispatchToProps = dispatch => ({
  fetchJob: (jobId) => {
    dispatch(fetchJob(jobId));
  },
  clearJobDetail: (jobId) => {
    dispatch(clearJobDetail(jobId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailView);
