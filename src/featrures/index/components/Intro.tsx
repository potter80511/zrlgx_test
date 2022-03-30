import styled from 'styled-components';
import { StyledContainer } from '../../../styles/commonStyles';

const StyledIntro = styled(StyledContainer)`
  padding: 50px 0 88px;
  text-align: center;
`;
const StyledIntroWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const StyledIntroTitle = styled.h2`
  color: #01254F;
  font-size: 28px;
`;
const StyledIntroContent = styled.p`
  color: #333;
`;

const Intro = () => {
  return (
    <StyledIntro>
      <StyledIntroWrapper>
        <StyledIntroTitle>Forex Webinars</StyledIntroTitle>
        <StyledIntroContent>
        Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.
        </StyledIntroContent>
      </StyledIntroWrapper>
    </StyledIntro>
  )
}

export default Intro;
