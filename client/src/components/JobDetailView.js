import React from 'react';
import JobList from '../containers/JobList'; 


class JobDetailView extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount = () => {
      const jobId = this.props.jobId;
      this.props.fetchJob(jobId);
  }
  
  handleBackClick = () => {
    this.props.clearJobDetail();
    this.props.handleBackClick();
  }
  
  render() {
      const jobDetail = this.props.jobDetail.jobDetail;
      if (jobDetail) {
        return (
          <div className='job-detail'>
            <div className="content">
              <h2 className="jobType">{jobDetail.jobTitle}</h2>
              <table >
                <tr><th>Company:</th> <td>{jobDetail.companyName}</td></tr>
                <tr><th>Job Description:</th> <td>{jobDetail.jobDescription}</td></tr>
                <tr><th>Education Type:</th> <td>{jobDetail.education}</td></tr>
                <tr><th>Experience/Skills:</th> <td>{jobDetail.skills}</td></tr>
                <tr><th>Location:</th> <td>{jobDetail.location}</td></tr>
                <tr><th>Salary:</th> <td>{jobDetail.salary}</td></tr>
                <tr><th>Role:</th> <td>{jobDetail.role}</td></tr>
                <tr><th>Industry:</th> <td>{jobDetail.industry}</td></tr>
                <tr><th>Functional Area:</th> <td>{jobDetail.functionalArea}</td></tr>
                <tr><th>Employment Type:</th> <td>{jobDetail.employementType}</td></tr>
              </table>
              <div className="companyProfile">
                <div>Company Profile:</div>
                <div>{jobDetail.companyProfile}</div>
              </div>
            </div>
            <div class="btn-container"><button className="backBtn" onClick={this.handleBackClick}>Back</button></div>
         </div>
      );
      } else {
        //TODO: Add loading image based on redux fetch call status
        return (<div> Loading... </div>);
      }
      
      
  }
}

export default JobDetailView;
