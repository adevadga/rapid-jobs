import React from 'react';
import logo from '../../res/images/companyLogo.png';
import { Link } from 'react-router-dom'

class NavigationItems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
     return(
       <div className="nav-container">
         <div className="nav-inner">
            <div className="advancedmenu">
                <div id="menu1" className="menu">
                    <div className="parentMenu">
                        <Link to='/'><span>Jobs</span></Link>
                    </div>
                </div>
                <div id="menu2" className="menu">
                    <div className="parentMenu">
                        <Link to='/recruiters'><span>Recruiters</span></Link>
                    </div>
                </div>
                
                <div id="menu3" className="menu">
                    <div className="parentMenu">
                        <Link to='/about'><span>About Us</span></Link>
                    </div>
                </div>
                
            </div>
         </div>
       </div>
     );
  }
    
}
export default NavigationItems;
