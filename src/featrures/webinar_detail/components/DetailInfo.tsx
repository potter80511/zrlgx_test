import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer } from '../../../styles/commonStyles';
import { SinglePost } from '../types';
// import Flex from './Flex';

const StyledDetailInfo = styled(StyledContainer)`
  margin-top: 50px;
`;
const StyledTitle = styled.h1`
  margin-top: 0;
  color: #333;
`;
const StyledCreatedAt = styled.div`
  color: #999;
`;
const StyledContent = styled.div`
  color: #555;
`;

const DetailInfo = (props: { detailInfo: SinglePost }) => {
  const {
    detailInfo: {
      created_at,
      title,
      content,
    }
  }  = props;
  
  return (
    <StyledDetailInfo>
      <StyledTitle>{title}</StyledTitle>
      <StyledCreatedAt>{created_at}</StyledCreatedAt>
      <StyledContent dangerouslySetInnerHTML={{__html: content}} />
    </StyledDetailInfo>
  )
}

export default DetailInfo;
