import React from 'react';
import JobDetailView from '../containers/JobDetailView'; 
//import {withRouter} from 'react-router';

class DetailView extends React.Component {
  
  constructor(props) {
    super(props);
  }
  handleBackClick = () => {
    this.props.history.push('/');
    //this.props.handleBackClick();
  }
  
  render() {
      const jobId = this.props.match.params.jobId
      return(
        <JobDetailView jobId={jobId} handleBackClick={this.handleBackClick}/>
      );
  }
}

export default DetailView;
