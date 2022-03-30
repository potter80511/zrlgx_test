import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPostList } from './actions/postListActions';
import Intro from './components/Intro';
import Overview from './components/OverView';
import PostListBlock from './components/PostListBlock';
import RegisterForm from './components/register_form/RegisterForm';
import { postListSelector, postListLoadingSelector, postListNextPageSelector, postListHasMoreSelector } from './selectors';
import { reset as resetPostList } from './slices/postListSlice';
import { Element, scroller } from 'react-scroll';
import { isLoginSelector } from '../login/selectors';

const StyledIndex = styled.div`
`

const IndexContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const postList = useSelector(postListSelector);
  const postListLoading = useSelector(postListLoadingSelector);
  const postListNextPage = useSelector(postListNextPageSelector);
  const postListHasMore = useSelector(postListHasMoreSelector); 
  const isLogin = useSelector(isLoginSelector); 

  const onRegisterClick = useCallback(() => {
    if (isLogin) {
      scroller.scrollTo('registerForm', {
        duration: 800,
        delay: 100,
        smooth: 'easeOutQuart',
      });
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
    <Element name="registerForm">
      <RegisterForm />
    </Element>
  </StyledIndex>
}

export default IndexContainer;
