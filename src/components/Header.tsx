import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledContainer } from '../styles/commonStyles';
import { useSelector } from 'react-redux';
import { userInfoSelector } from '../featrures/login/selectors'
import Flex from './Flex';

const StyledHeaderContent = styled(StyledContainer)`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button, a {
    text-align: center;
    width: 100px;
    padding: 8px 0;
  }
`;

const StyledUserButtons = styled(Flex)`
  font-size: 16px;
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

const StyledUserName = styled.div`
  color: #333;
  margin-right: 10px;
  b {
    color: #01254F;
  }
`;

const Header = () => {
  const userInfo = useSelector(userInfoSelector);
  const isLogin = !!userInfo;
  
  return (
    <header>
      <StyledHeaderContent>
        <div>
          <Link to="/">logo</Link>
        </div>
        <div>menu</div>
        <StyledUserButtons alignItems="center">
          {isLogin
            ? <StyledUserName>Hello <b>{userInfo.username}</b> !</StyledUserName>
            : <StyledLoginButton to="/login">Login</StyledLoginButton>
          }
          <StyledRegisterButton>{isLogin ? 'Logout' : 'Register'}</StyledRegisterButton>
        </StyledUserButtons>
      </StyledHeaderContent>
    </header>
  )
}

export default Header;
