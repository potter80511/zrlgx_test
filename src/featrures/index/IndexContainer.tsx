import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPostList } from './actions/postListActions';
import PostListBlock from './components/PostListBlock';
import { postListSelector, postListLoadingSelector } from './selectors';

const StyledIndex = styled.div`
  background: #F2F2F2;
  padding: 80px;
`

const IndexContainer = () => {
  const dispatch = useDispatch();
  const postList = useSelector(postListSelector);
  const postListLoading = useSelector(postListLoadingSelector);

  useEffect(() => {
    dispatch(getPostList({per_page: 12, page: 1}));
  }, []);
  return <StyledIndex>
    <PostListBlock list={postList} loading={postListLoading} />
  </StyledIndex>
}

export default IndexContainer;
