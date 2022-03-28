import React from 'react';
import styled from 'styled-components';
import { lineClamp } from '../../../styles/mixin';
import { PostList } from '../types';
import arrowCircle from '../../../svg/arrow.svg'

type PostProps = {
  post: PostList;
  onRegisterClick: () => void;
}

const StyledCreatedAt = styled.div`
  color: #01254F;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
`

const StyledPost = styled.div`
  position: relative;
  width: calc(calc(100% - 40px)/3);
  height: 300px;
  padding: 20px;
  background: white;
  border: 1px solid #D6D6D6;
  box-sizing: border-box;
  box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);
  border-radius: 4px;

  &:nth-child(2n-1) {
    margin-bottom: 20px;
  }
  &:not(:first-child):not(:nth-child(2)) {
    margin-left: 20px;
  }
`

const StyledH3 = styled.div`
  color: #01254F;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 14px;
`;

const StyledContent = styled.div<{clamp?: number;}>`
  ${({ clamp }) => lineClamp(clamp)};
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  font-size: 14px;
`;

const StyledRegisterNow = styled.button`
  display: flex;
  width: calc(100% - 40px);
  justify-content: space-between;
  border: none;
  background: none;
  cursor: pointer;
  color: #6BB718;
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  position: absolute;
  bottom: 20px;
`;

const Post = (props: PostProps) => {
  const {
    post: { title, created_at, content, favourited },
    onRegisterClick
  } = props;
  
  return (
    <StyledPost>
      <StyledCreatedAt>{created_at}</StyledCreatedAt>
      <StyledH3>{title}</StyledH3>
      <StyledContent dangerouslySetInnerHTML={{__html: content}} clamp={3} />
      <StyledRegisterNow onClick={onRegisterClick}>
        <span>Register Now</span>
        <img src={arrowCircle} />
      </StyledRegisterNow>
    </StyledPost>
  )
}

export default Post;
