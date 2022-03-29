import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CookiesHelper } from '../../helper/CookiesHelper';
import { getPostList } from '../index/actions/postListActions';
import PostListBlock from '../index/components/PostListBlock';
import { postListSelector, postListLoadingSelector, postListNextPageSelector, postListHasMoreSelector } from '../index/selectors';
import { reset as resetPostList } from '../index/slices/postListSlice';
import { userInfoSelector } from '../login/selectors';

const RegisteredContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const postList = useSelector(postListSelector);
  const postListLoading = useSelector(postListLoadingSelector);
  const postListNextPage = useSelector(postListNextPageSelector);
  const postListHasMore = useSelector(postListHasMoreSelector);
  const userInfo = useSelector(userInfoSelector);
  console.log(postListNextPage, 'postListNextPage')

  const userToken = CookiesHelper.getUserToken();

  const isLogin = !!userInfo;

  const onRegisterClick = useCallback(() => {
    if (isLogin) {
      console.log('isLogin')
    } else {
      navigate('/login');
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch(getPostList({per_page: 12, page: postListNextPage, token: userToken, favourited: 1}));

    return () => {
      dispatch(resetPostList());
    }
  }, []);

 return <PostListBlock
    list={postList}
    loading={postListLoading}
    hasMore={postListHasMore}
    getMorePost={() => dispatch(getPostList({per_page: 12, page: postListNextPage, token: userToken, favourited: 1}))}
    onRegisterClick={onRegisterClick}
  />
}

export default RegisteredContainer;
