import styled from 'styled-components';
import { StyledContainer } from '../../../../styles/commonStyles';

const StyledRegisterForm = styled.div`
  padding: 30px 0 88px;
`;
const StyledForm = styled.div`
  padding: 80px 20px;
  text-align: center;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
  border-radius: 20px;
`;
const StyledFormTitle = styled.h2`
  color: #01254F;
  font-size: 22px;
`;
const StyledSubTitle = styled.p`
  color: #333;
`;

const RegisterForm = () => {
  return (
    <StyledRegisterForm>
      <StyledContainer>
        <StyledForm>
          <StyledFormTitle>Register for a Webinar now</StyledFormTitle>
          <StyledSubTitle>
          Please fill in the form below and you will be contacted by one of our professional business experts.
          </StyledSubTitle>
        </StyledForm>
      </StyledContainer>
    </StyledRegisterForm>
  )
}

export default RegisterForm;
