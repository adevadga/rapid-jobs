import React from 'react';
import { Grid, Cell } from "styled-css-grid"
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
          <div className="job-detail">
            <h2 className="jobType">{jobDetail.jobTitle}</h2>
            <Grid columns={10} gap="2px">
                <Cell height={2} width={1}> <label>Company:  </label> </Cell>
                <Cell height={2} width={9}>{jobDetail.companyName}</Cell>
                
                <Cell height={2} width={1}> <label>Job Description: </label> </Cell>
                <Cell height={2} width={9}>{jobDetail.jobDescription}</Cell>
                
                <Cell height={2} width={1}> <label>Education Type: </label> </Cell>
                <Cell height={2} width={9}>{jobDetail.education}</Cell>
                
                <Cell height={2} width={1}> <label>Experience/Skills: </label> </Cell>
                <Cell height={2} width={9}>{jobDetail.skills}</Cell>
                
                <Cell height={2} width={1}> <label>Location: </label> </Cell>
                <Cell height={2} width={9}>{jobDetail.location}</Cell>
                
                <Cell height={2} width={1}> <label>Salary: </label> </Cell>
                <Cell height={2} width={9}>{jobDetail.salary}</Cell>
                
                <Cell height={2} width={1}> <label>Role: </label></Cell>
                <Cell height={2} width={9}>{jobDetail.role}</Cell>
                
                <Cell height={2} width={1}><label>Industry: </label></Cell>
                <Cell height={2} width={9}>{jobDetail.industry}</Cell>
                
                <Cell height={2} width={1}><label>Functional Area: </label></Cell>
                <Cell height={2} width={9}>{jobDetail.functionalArea}</Cell>
                
                <Cell height={2} width={1}><label>Employment Type: </label></Cell>
                <Cell height={2} width={9}>{jobDetail.employementType}</Cell>
           </Grid>
           
           <div className="companyProfile">
             <div><label>Company Profile: </label></div>
             <div>{jobDetail.companyProfile}</div>
           </div>
           
           <div className="btn-container"><button className="backBtn" onClick={this.handleBackClick}>Back</button></div>
         </div>
      );
      } else {
        //TODO: Add loading image based on redux fetch call status
        return (<div> Loading... </div>);
      }
  }
}

export default JobDetailView;
