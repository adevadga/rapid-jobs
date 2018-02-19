import React from 'react';
import logo from '../../res/images/rapidJobLogo.png';
import NavigationItems from './NavigationItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div style={{ marginTop: 20 }} className="header">
      <div className="logo">
          <img src={logo} alt="react logo" />
      </div>
    </div>
    );
  }
}

export default Header;
