import React from 'react';
import styled from 'styled-components';
import { SinglePost } from '../../webinar_detail/types';
import Post from './Post';
import { Waypoint } from 'react-waypoint';
import { StyledContainer } from '../../../styles/commonStyles';

type PostListProps = {
  list: SinglePost[];
  loading: boolean;
  hasMore: boolean;
  getMorePost: () => void;
  onRegisterClick: (id: number) => void;
}

const StyledPostList = styled.div`
  background: #F2F2F2;
  padding: 80px;
  
`

const StyledPostListContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 620px;
  overflow: auto;
`

const PostListBlock = (props: PostListProps) => {
  const { list = [], loading, hasMore, getMorePost, onRegisterClick } = props;

  return <StyledPostList>
    <StyledPostListContainer>
      {loading ?
        <div>loading</div>
      : <>
          {list.map((post) => {
            return <Post
              key={post.id}
              post={post}
              onRegisterClick={() => onRegisterClick(post.id)}
            />
          })}
          {hasMore &&
            <Waypoint
              horizontal
              onEnter={getMorePost}
            ><div>has more</div></Waypoint>
          }
        </>
      }
    </StyledPostListContainer>
  </StyledPostList>
}

export default PostListBlock;
