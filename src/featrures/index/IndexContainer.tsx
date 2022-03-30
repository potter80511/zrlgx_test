import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPostList } from './actions/postListActions';
import Intro from './components/Intro';
import Overview from './components/OverView';
import PostListBlock from './components/PostListBlock';
import { postListSelector, postListLoadingSelector, postListNextPageSelector, postListHasMoreSelector } from './selectors';
import { reset as resetPostList } from './slices/postListSlice';

const StyledIndex = styled.div`
`

const IndexContainer = () => {
  const navigate = useNavigate();

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
      navigate('/login');
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch(getPostList({per_page: 12, page: postListNextPage}));

    return () => {
      dispatch(resetPostList());
    }
  }, []);

  return <StyledIndex>
    <Intro/>
    <PostListBlock
      list={postList}
      loading={postListLoading}
      hasMore={postListHasMore}
      getMorePost={() => dispatch(getPostList({per_page: 12, page: postListNextPage}))}
      onRegisterClick={onRegisterClick}
    />
    <Overview/>
  </StyledIndex>
}

export default IndexContainer;
