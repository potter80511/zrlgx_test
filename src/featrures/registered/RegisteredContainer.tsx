import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CookiesHelper } from '../../helper/CookiesHelper';
import { getPostList, unFavoritePosts } from '../index/actions/postListActions';
import PostListBlock from '../index/components/PostListBlock';
import { postListSelector, postListLoadingSelector, postListNextPageSelector, postListHasMoreSelector } from '../index/selectors';
import { reset as resetPostList } from '../index/slices/postListSlice';

const RegisteredContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const postList = useSelector(postListSelector);
  const postListLoading = useSelector(postListLoadingSelector);
  const postListNextPage = useSelector(postListNextPageSelector);
  const postListHasMore = useSelector(postListHasMoreSelector);

  const userToken = CookiesHelper.getUserToken();
  const isLogin = CookiesHelper.getCookie('isLogin');

  useEffect(() => {
    dispatch(getPostList({per_page: 12, page: postListNextPage, token: userToken, favourited: 1}));
  
    if (!isLogin) {
      navigate('/login');
    }

    return () => {
      dispatch(resetPostList());
    }
  }, []);

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin]);

 return <PostListBlock
    list={postList}
    loading={postListLoading}
    hasMore={postListHasMore}
    getMorePost={() => dispatch(getPostList({per_page: 12, page: postListNextPage, token: userToken, favourited: 1}))}
    onRegisterClick={
      (id) =>
        dispatch(
          unFavoritePosts({ id, token: userToken })
        )
    }
  />
}

export default RegisteredContainer;
