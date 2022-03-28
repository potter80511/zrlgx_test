import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPostList } from './actions/postListActions';
import PostListBlock from './components/PostListBlock';
import { postListSelector, postListLoadingSelector, postListNextPageSelector, postListHasMoreSelector } from './selectors';

const StyledIndex = styled.div`
  background: #F2F2F2;
  padding: 80px;
`

const IndexContainer = () => {
  const dispatch = useDispatch();
  const postList = useSelector(postListSelector);
  const postListLoading = useSelector(postListLoadingSelector);
  const postListNextPage = useSelector(postListNextPageSelector);
  const postListHasMore = useSelector(postListHasMoreSelector);

  const isLogin = false;

  const onRegisterClick = useCallback(() => {

    if (isLogin) {
      console.log('isLogin')
    } else {
      console.log('not login')
    }
  }, []);

  useEffect(() => {
    dispatch(getPostList({per_page: 12, page: postListNextPage}));
  }, [isLogin]);

  return <StyledIndex>
    <PostListBlock
      list={postList}
      loading={postListLoading}
      hasMore={postListHasMore}
      getMorePost={() => dispatch(getPostList({per_page: 12, page: postListNextPage}))}
      onRegisterClick={onRegisterClick}
    />
  </StyledIndex>
}

export default IndexContainer;
