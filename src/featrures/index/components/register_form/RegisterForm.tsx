import { useState } from 'react';
import styled from 'styled-components';
import { StyledContainer } from '../../../../styles/commonStyles';
import Input from './Input';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
}

const StyledRegisterForm = styled.div`
  padding: 30px 0 88px;
`;
const StyledForm = styled.div`
  padding: 80px 20px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
  border-radius: 20px;
`;
const StyledFormInsideContainer = styled.div`
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
`;
const StyledFormHead = styled.div`
  text-align: center;
`;
const StyledFormTitle = styled.h2`
  color: #01254F;
  font-size: 22px;
`;
const StyledSubTitle = styled.p`
  color: #333;
`;
const StyledSubmitButton = styled.button.attrs({type: 'button'})`
  width: 100%;
  padding: 13px 0;
  color: ${({ disabled }) => disabled ? '#D1D1D1' : '#fff'};
  background: ${({ disabled }) => disabled ? '#E9E9E9' : '#01254F'};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  &:disabled {
    cursor: not-allowed;
  }
`;

const RegisterForm = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const {
    firstName,
    lastName,
    email,
  } = formState;

  return (
    <StyledRegisterForm>
      <StyledContainer>
        <StyledForm>
          <StyledFormInsideContainer>
            <StyledFormHead>
              <StyledFormTitle>Register for a Webinar now</StyledFormTitle>
              <StyledSubTitle>
              Please fill in the form below and you will be contacted by one of our professional business experts.
              </StyledSubTitle>
            </StyledFormHead>
            <Input
              label="First Name"
              value={firstName}
              onChange={(val) => setFormState(
                {
                  ...formState,
                  firstName: val,
                }
              )}
            />
            <Input
              label="Last Name"
              value={lastName}
              onChange={(val) => setFormState(
                {
                  ...formState,
                  lastName: val,
                }
              )}
            />
            <Input
              label="Email"
              value={email}
              onChange={(val) => setFormState(
                {
                  ...formState,
                  email: val,
                }
              )}
            />
            <StyledSubmitButton
              disabled={false}
            >
            Register
            </StyledSubmitButton>
          </StyledFormInsideContainer>
        </StyledForm>
      </StyledContainer>
    </StyledRegisterForm>
  )
}

export default RegisterForm;
