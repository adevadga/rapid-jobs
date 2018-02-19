import React from 'react';
import JobList from '../containers/JobList'; 

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
      return(
        <div>
          <JobList/>
        </div>
      );
  }
}

export default HomePage;
