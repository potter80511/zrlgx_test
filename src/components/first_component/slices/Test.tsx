import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { firstSelector } from '../selectors';

const StyledWrapper = styled.div`
  width: 100%;
`

const Test = () => {
  const first = useSelector(firstSelector);
  return <StyledWrapper>
    <div>{first.firstReducerState.firstState}</div>
  </StyledWrapper>
}

export default Test;
