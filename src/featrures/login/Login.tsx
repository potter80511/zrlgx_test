import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import { CookiesHelper } from '../../helper/CookiesHelper';
import { StyledContainer } from '../../styles/commonStyles';
import { loginAction } from './actions/loginActions';
import { userInfoSelector, userUnAuthorizedSelector } from './selectors'

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
  font-size: 20px;
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
const StyledLoginUnAuthorized = styled.div`
  color: red;
  font-weight: 600;
  font-size: 14px;
`;
const StyledRememberMeLabel = styled.label`
  font-size: 14px;
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const userInfo = useSelector(userInfoSelector);
  const userUnAuthorized = useSelector(userUnAuthorizedSelector);

  const onLoginSubmit = useCallback(() => {
    dispatch(loginAction({email, password}));

    rememberMe
      ? CookiesHelper.setCookie('user_email', email)
      : CookiesHelper.removeCookie('user_email')
  }, [dispatch, rememberMe, email, password]);

  useEffect(() => {
    const lastTimeEmail = CookiesHelper.getCookie('user_email');
    if(!!lastTimeEmail) {
      setEmail(lastTimeEmail);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    userInfo && navigate('/');
  }, [userInfo]);

  return (
    <StyledLogin>
      <StyledLoginBlock>
        <StyledLoginHead>Login</StyledLoginHead>
        <StyledLoginBody>
          {userUnAuthorized && <StyledLoginUnAuthorized>登入錯誤</StyledLoginUnAuthorized>}
          <StyledInputField>
            <StyledLabel>Email: </StyledLabel>
            <StyledInput type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
          </StyledInputField>
          <StyledInputField>
            <StyledLabel>Password: </StyledLabel>
            <StyledInput type="password" onChange={(e) => setPassword(e.currentTarget.value)} />
          </StyledInputField>
        </StyledLoginBody>
        <StyledLoginFooter>
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <StyledRememberMeLabel>Remember me</StyledRememberMeLabel>
            </Flex>
            <StyledSubmitButton onClick={onLoginSubmit}>Login</StyledSubmitButton>
          </Flex>
        </StyledLoginFooter>
      </StyledLoginBlock>
    </StyledLogin>
  )
}

export default Login;
