import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer } from '../../../styles/commonStyles';
import { SinglePost } from '../types';
// import Flex from './Flex';

const StyledDetailInfo = styled(StyledContainer)`
  margin-top: 50px;
`;

const DetailInfo = (props: { detailInfo: SinglePost }) => {
  const {
    detailInfo: {
      created_at,
      title,
    }
  }  = props;
  
  return (
    <StyledDetailInfo>
      detail {created_at}
    </StyledDetailInfo>
  )
}

export default DetailInfo;
