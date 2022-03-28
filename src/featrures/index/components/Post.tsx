import React from 'react';
import styled from 'styled-components';
import { lineClamp } from '../../../styles/mixin';
import { PostList } from '../types';

type PostProps = {post: PostList}

const StyledCreatedAt = styled.div`
  color: #01254F;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
`

const StyledPost = styled.div`
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

const Post = (props: PostProps) => {
  const { title, created_at, content, favourited } = props.post;
  return (
    <StyledPost>
      <StyledCreatedAt>{created_at}</StyledCreatedAt>
      <StyledH3>{title}</StyledH3>
      <StyledContent dangerouslySetInnerHTML={{__html: content}} clamp={3} />
    </StyledPost>
  )
}

export default Post;
