import React from 'react';
import styled from 'styled-components';
import { PostList } from '../types';
import Post from './Post';

type PostListProps = {
  list: PostList[];
  loading: boolean;
}

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 620px;
  overflow: auto;
`

const PostListBlock = (props: PostListProps) => {
  const { list = [], loading } = props;
  return <StyledPostList>
    {loading ?
      <div>loading</div>
    : list.map((post) => {
      return <Post post={post}/>
    })}
  </StyledPostList>
}

export default PostListBlock;
