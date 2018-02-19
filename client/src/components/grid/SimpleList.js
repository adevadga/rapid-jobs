import React from 'react';
import { Link } from 'react-router-dom';

class SimpleList extends React.Component {
  
  static propTypes = {
      collection: React.PropTypes.array.isRequired,
      onViewItem: React.PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props);
  }
  
  handleItemClick = (jobId) => {
     console.log(jobId);
     //this.props.onViewItem(jobId);
  }
  
  renderItem = (rowData) => {
      return (
        <Link key={rowData.jobId} to={`/job/${rowData.jobId}`}>
          <li className="list-item" key={rowData.jobId}>
            <div className="job-title">{rowData.jobTitle}</div>
            <div className="companyName">{rowData.companyName}</div>
            
            <div className="more">
                <label className="label">Keyskills: </label>
                <div className="description">{rowData.keySkills}</div>
                
                <label className="label">Job Description: </label>
                <div className="description">{rowData.jobDescription}</div>
            </div>
          </li>
        </Link>
        
      );
  }
  // <Link to={`/job/${rowData.jobId}`}> More... </Link>
  
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
