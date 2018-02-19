import { connect } from 'react-redux';
import { loadJobDetail, clearJobDetail } from '../actions/jobActions';
import JobDetailView from '../components/JobDetailView';

const mapStateToProps = state => ({
  jobDetail: state.jobDetail
});

const mapDispatchToProps = dispatch => ({
  loadJobDetail: (jobId) => {
    dispatch(loadJobDetail(jobId));
  },
  clearJobDetail: (jobId) => {
    dispatch(clearJobDetail(jobId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailView);
