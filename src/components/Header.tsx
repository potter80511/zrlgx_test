import React from 'react';
import styled from 'styled-components';
import arrowCircle from '../../../svg/arrow.svg'
import { Link } from 'react-router-dom';

const StyledHeaderContent = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUserButtons = styled.header`
  display: flex;
  font-size: 16px;
  button, a {
    text-align: center;
    width: 100px;
    padding: 8px 0;
  }
`;

const StyledLoginButton = styled(Link)`
  display: inline-block;
  color: #01254F;
  border: 1px solid #01254F;
  border-radius: 4px;
  margin-right: 10px;
`;

const StyledRegisterButton = styled.button`
  color: white;
  border-radius: 4px;
  background-color: #01254F;
`;

const Header = () => {
  return (
    <header>
      <StyledHeaderContent>
        <div>
          <Link to="/">logo</Link>
        </div>
        <div>menu</div>
        <StyledUserButtons>
          <StyledLoginButton to="/login">Login</StyledLoginButton>
          <StyledRegisterButton>Register</StyledRegisterButton>
        </StyledUserButtons>
      </StyledHeaderContent>
    </header>
  )
}

export default Header;
