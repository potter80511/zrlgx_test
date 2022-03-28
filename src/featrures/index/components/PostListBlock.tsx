import React from 'react';
import styled from 'styled-components';
import { PostList } from '../types';
import Post from './Post';
import InfiniteScroll from "react-infinite-scroll-component";
import { Waypoint } from 'react-waypoint';

type PostListProps = {
  list: PostList[];
  loading: boolean;
  hasMore: boolean;
  getMorePost: () => void;
}

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 620px;
  overflow: auto;
`

const PostListBlock = (props: PostListProps) => {
  const { list = [], loading, hasMore, getMorePost } = props;
  return <StyledPostList>
    {loading ?
      <div>loading</div>
    : <>
        {list.map((post) => {
          return <Post post={post}/>
        })}
        {hasMore &&
          <Waypoint
            horizontal
            onEnter={getMorePost}
          ><div>has more</div></Waypoint>
        }
      </>
    }
  </StyledPostList>
}

export default PostListBlock;
