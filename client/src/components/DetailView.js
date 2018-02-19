import React from 'react';
import PropTypes from 'prop-types';
import JobDetailView from '../containers/JobDetailView'; 
//import {withRouter} from 'react-router';

class DetailView extends React.Component {
  
  static propTypes = {
    jobId: PropTypes.number.required
  }
  
  constructor(props) {
    super(props);
  }
  handleBackClick = () => {
    this.props.history.push('/');
  }
  
  render() {
      const jobId = this.props.match.params.jobId
      return(
        <JobDetailView jobId={jobId} handleBackClick={this.handleBackClick}/>
      );
  }
}

export default DetailView;
