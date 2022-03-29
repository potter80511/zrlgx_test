import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer } from '../../styles/commonStyles';
import { useGetDetail } from './hooks';
import DetailInfo from './components/DetailInfo';
// import Flex from './Flex';

const StyledDetailInfoContainer = styled(StyledContainer)`
  margin-top: 50px;
`;

const WebinarDetailContainer = () => {
  const location = useLocation();

  const fetchId = location.pathname.split('/')[2];
  const { detailInfo, loading } = useGetDetail(Number(fetchId));
  
  return (
    <StyledDetailInfoContainer>
      {loading
        ? <div>Loading...</div>
        : <div>
            {detailInfo
              ? <DetailInfo detailInfo={detailInfo} />
              : <>頁面不存在</>
            }
          </div>
      }
    </StyledDetailInfoContainer>
  )
}

export default WebinarDetailContainer;
