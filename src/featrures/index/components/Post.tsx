import React from 'react';
import styled from 'styled-components';
import { lineClamp } from '../../../styles/mixin';
import { PostList } from '../types';

type PostProps = {post: PostList}

const StyledPost = styled.div`
  width: calc(calc(100% - 40px)/3);
  height: 300px;
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

const StyledContent = styled.div<{clamp?: number;}>`
  ${({ clamp }) => lineClamp(clamp)};
`;

const Post = (props: PostProps) => {
  const { title, created_at, content, favourited } = props.post;
  return <StyledPost>
    <div>{created_at}</div>
    <h3>{title}</h3>
    <StyledContent dangerouslySetInnerHTML={{__html: content}} clamp={5} />
  </StyledPost>
}

export default Post;
