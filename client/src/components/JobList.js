import React from 'react';
import PropTypes from 'prop-types';
import SimpleList from './grid/SimpleList';

class JobList extends React.Component {
  
  static propTypes = {
    jobs: PropTypes.array.isRequired,
    viewJob: PropTypes.func.isRequired,
    fetchJobs: PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount = () => {
      this.props.fetchJobs();
  }
  
  hanldeViewItem = (jobId) => {
    this.props.viewJob(jobId);
  }
  
  render() {
        return (
          <div>
           <SimpleList collection={this.props.jobs} onViewItem={this.hanldeViewItem}/>
          </div>
        );
   }
}

export default JobList;
