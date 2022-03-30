import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer } from '../../../styles/commonStyles';
import { SinglePost } from '../types';
import Flex from '../../../components/Flex';
import {ReactComponent as Heart} from '../../../svg/heart.svg';
import {ReactComponent as HeartFilled} from '../../../svg/heart-filled.svg';

type DetailInfoProps = {
  detailInfo: SinglePost;
  onAddToFavorite: () => void;
}

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
  margin-top: 30px;
  color: #555;
`;
const StyledAddToFavorite = styled.button.attrs({type: 'button'})`
  display: flex;
`;
const StyledHeart = styled(Heart)`
  width: 15px;
  height: 15px;
  fill: #01254F;
`;
const StyledHeartFilled = styled(HeartFilled)`
  width: 15px;
  height: 15px;
  fill: #ea4b67;
`;
const StyledFavoriteCount = styled.span`
  color: #01254F;
  font-size: 12px;
`;

const DetailInfo = (props: DetailInfoProps) => {
  const {
    detailInfo: {
      created_at,
      title,
      content,
      favourited,
      favourite_count,
    },
    onAddToFavorite
  }  = props;
  
  return (
    <StyledDetailInfo>
      <StyledTitle>{title}</StyledTitle>
      <Flex alignItems="center" justifyContent="space-between">
        <StyledCreatedAt>{created_at}</StyledCreatedAt>
        <Flex alignItems="center">
          <StyledAddToFavorite onClick={onAddToFavorite}>
            {favourited
              ? <StyledHeartFilled/>
              : <StyledHeart/>
            }
          </StyledAddToFavorite>
          <StyledFavoriteCount>{favourite_count}</StyledFavoriteCount>
        </Flex>
      </Flex>
      <StyledContent dangerouslySetInnerHTML={{__html: content}} />
    </StyledDetailInfo>
  )
}

export default DetailInfo;
