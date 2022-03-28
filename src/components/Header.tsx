import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledContainer } from '../styles/commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector } from '../featrures/login/selectors'
import { reset as resetUserInfo } from '../featrures/login/slices/userSlice';
import { checkUserToken } from '../featrures/login/actions/loginActions';
import Flex from './Flex';
import jsCookie from 'js-cookie';

const StyledHeaderContent = styled(StyledContainer)`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUserButtons = styled.div`
  button, a {
    text-align: center;
    width: 100px;
    padding: 8px 0;
    border-radius: 3px;
    border: 1px solid #01254F;
  }
`;

const StyledLoginButton = styled(Link)`
  display: inline-block;
  color: #01254F;
  margin-right: 10px;
  font-size: 16px;
`;

const StyledRegisterButton = styled.button`
  color: white;
  background-color: #01254F;
  font-size: 16px;
`;

const StyledUserName = styled.div`
  color: #333;
  margin-right: 10px;
  b {
    color: #01254F;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  const isLogin = !!userInfo;

  const logout = useCallback(() => {
    dispatch(resetUserInfo())
  }, [dispatch, resetUserInfo]);

  useEffect(() => {
    const userToken = jsCookie.get('user_token');
    userToken && dispatch(checkUserToken({ token: userToken }));
  }, []);
  
  return (
    <header>
      <StyledHeaderContent>
        <div>
          <Link to="/">logo</Link>
        </div>
        <div>menu</div>
        <StyledUserButtons>
          <Flex alignItems="center">
            {isLogin
              ? <StyledUserName>Hello <b>{userInfo.username}</b> !</StyledUserName>
              : <StyledLoginButton to="/login">Login</StyledLoginButton>
            }
            <StyledRegisterButton onClick={() => isLogin && logout()}>{isLogin ? 'Logout' : 'Register'}</StyledRegisterButton>
          </Flex>
        </StyledUserButtons>
      </StyledHeaderContent>
    </header>
  )
}

export default Header;
