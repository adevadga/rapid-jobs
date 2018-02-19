import React from 'react';
import styled from 'styled-components';
import logo from '../../res/images/rapidJobLogo.png';
import NavigationItems from './NavigationItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const Logo = styled.div`
      box-shadow: 5px 10px;
    `;
    return (
      <Logo>
          <img src={logo} alt="Rapid Jobs" />
      </Logo>
    );
  }
}

export default Header;
