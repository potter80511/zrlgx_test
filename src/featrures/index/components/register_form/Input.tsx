import styled from 'styled-components';

type InputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

const StyledInputField = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const StyledLabel = styled.label`
  display: block;
  color: #4A4A4A;
  margin-bottom: 8px;
`;
export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #C6C6C6;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  font-size: 18px;
`;

const Input = (props: InputProps) => {
  const {
    label,
    value,
    onChange,
  } = props

  return (
    <StyledInputField>
      <StyledLabel>
        {label}
      </StyledLabel>
      <StyledInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledInputField>
  )
}

export default Input;
