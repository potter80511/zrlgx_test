import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledContainer } from '../../styles/commonStyles';
import { useGetDetail } from './hooks';
import DetailInfo from './components/DetailInfo';
import { useDispatch } from 'react-redux';
import { addFavoritePosts, unFavoritePosts } from '../index/actions/postListActions';
import { CookiesHelper } from '../../helper/CookiesHelper';

const StyledDetailInfoContainer = styled(StyledContainer)`
  margin-top: 50px;
`;

const WebinarDetailContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userToken = CookiesHelper.getUserToken();
  const isLogin = CookiesHelper.getCookie('isLogin');
  const fetchId = location.pathname.split('/')[2];
  const { detailInfo, loading, getDetailInfo } = useGetDetail(Number(fetchId), userToken);

  const favoriteHandler = async () => {
    if (detailInfo) {
      const { favourited, id } = detailInfo;
      favourited
        ? await dispatch(unFavoritePosts({ id, token: userToken }))
        : await dispatch(addFavoritePosts({ id: detailInfo.id, token: userToken}));

      getDetailInfo();
    }
  }
  
  return (
    <StyledDetailInfoContainer>
      {loading
        ? <div>Loading...</div>
        : <div>
            {detailInfo
              ? <DetailInfo
                  detailInfo={detailInfo}
                  onAddToFavorite={() => {
                    isLogin
                      ? favoriteHandler()
                      : navigate('/login');
                  }}
                />
              : <>頁面不存在</>
            }
          </div>
      }
    </StyledDetailInfoContainer>
  )
}

export default WebinarDetailContainer;
