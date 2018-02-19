import React from 'react';
import styled from 'styled-components';

class Recruiters extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const Recruiters = styled.ul`
        text-decoration: none;
    `;
     return(
       <div>
         <h2> Recruiters </h2>
         <Recruiters>
            <li>Recruiter - 1</li>
            <li>Recruiter - 2</li>
            <li>Recruiter - 3</li>
         </Recruiters>
       </div>
     );
  }
    
}
export default Recruiters;
