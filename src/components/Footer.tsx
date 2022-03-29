// import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { StyledContainer } from '../styles/commonStyles';
// import { useDispatch, useSelector } from 'react-redux';
// import { userInfoSelector, checkUserLoginLoadingSelector } from '../featrures/login/selectors'
// import { checkUserToken, logoutAction } from '../featrures/login/actions/loginActions';
// import Flex from './Flex';
// import jsCookie from 'js-cookie';

const StyledFooter = styled.footer`
  margin-top: 60px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src="/image/1920_footer.png" />
    </StyledFooter>
  )
}

export default Footer;
