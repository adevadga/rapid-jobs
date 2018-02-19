import React from 'react';
import styled from 'styled-components';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const AboutCt = styled.div`
        text-decoration: none;
    `;
     return(
       <div>
         <h2> About Us </h2>
         <AboutCt>
            Here show some awesome details about US.
         </AboutCt>
       </div>
     );
  }
    
}
export default AboutUs;
