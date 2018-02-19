import React from 'react';
import SimpleList from './grid/SimpleList';

class JobList extends React.Component {
  
  static propTypes = {
      jobs: React.PropTypes.array.isRequired,
      viewJob: React.PropTypes.func.isRequired,
      fetchJobs: React.PropTypes.func.isRequired
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
