import React from 'react';
import styled from 'styled-components';
import arrowCircle from '../../../svg/arrow.svg'
import Flex from '../../components/Flex';
import { StyledContainer } from '../../styles/commonStyles';

const StyledLogin = styled(StyledContainer)`
  margin-top: 50px;
`;

const StyledLoginBlock = styled.div`
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const StyledLoginHead = styled.div`
  background: #efefef;
  border-bottom: 1px solid #ddd;
  color: #333;
  font-size: 26px;
  text-align: center;
  padding: 20px;
`;

const StyledLoginBody = styled.div`
  padding: 50px 30px;
`;

const StyledInputField = styled.div`
  display: block;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px rgba(180, 180, 180, 0.5) inset;
`;

const StyledLoginFooter = styled.div`
  background: #efefef;
  border-top: 1px solid #ddd;
  padding: 20px;
  >div {
    width: 100%;
  }
`;

const StyledSubmitButton = styled.button`
  color: white;
  background-color: #01254F;
  font-size: 18px;
  width: 120px;
  padding: 10px;
  border-radius: 2px;
`;

const Login = () => {
  return (
    <StyledLogin>
      <StyledLoginBlock>
        <StyledLoginHead>Login</StyledLoginHead>
        <StyledLoginBody>
          <StyledInputField>
            <StyledLabel>Email: </StyledLabel>
            <StyledInput type="text" />
          </StyledInputField>
          <StyledInputField>
            <StyledLabel>Password: </StyledLabel>
            <StyledInput type="password" />
          </StyledInputField>
        </StyledLoginBody>
        <StyledLoginFooter>
          <Flex justifyContent="flex-end">
            <StyledSubmitButton>Login</StyledSubmitButton>
          </Flex>
        </StyledLoginFooter>
      </StyledLoginBlock>
    </StyledLogin>
  )
}

export default Login;
