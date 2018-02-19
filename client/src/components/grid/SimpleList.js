import React from 'react';
import PropTypes from 'prop-types';
//import FlexContainer from 'react-styled-flexbox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class SimpleList extends React.Component {
  
  static propTypes = {
      collection: PropTypes.array.isRequired,
      onViewItem: PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props);
  }
  
  handleItemClick = (jobId) => {
     this.props.onViewItem();
  }
  
  renderItem = (rowData) => {
    
    const JobInfo = styled.div`
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
    `;
    
    const JobTitle = styled.div`
      padding-bottom: 20px;
      color: #21618C;
      font-weight: 600;
      font-size: 32px;
    `;
    
    const CompanyName = styled.div`
      padding-bottom: 20px;
      font-weight: 600;
    `;
    
      return (
        <Link key={rowData.jobId} to={`/job/${rowData.jobId}`}>
          <li className="list-item" key={rowData.jobId}>
            <JobTitle>{rowData.jobTitle}</JobTitle>
            <CompanyName>{rowData.companyName}</CompanyName>
            
            <JobInfo>
                <div>
                  <span>Keyskills:  </span>
                  <span>{rowData.keySkills}</span>
                </div>
                <div>
                  <span>Job Description: </span>
                  <span>{rowData.jobDescription}</span>
                </div>
           </JobInfo>
          </li>
        </Link>
      );
  }
  
  render() {
      return (
        <div>
          <ul className="list-group">
            {
                this.props.collection.map( (row) => {
                    return this.renderItem(row);
                })
            }
          </ul>
        </div>
      );
  }
}

export default SimpleList;
