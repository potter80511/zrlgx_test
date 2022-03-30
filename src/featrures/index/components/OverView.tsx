import styled from 'styled-components';
import Flex from '../../../components/Flex';
import { StyledContainer } from '../../../styles/commonStyles';
import { Link } from 'react-router-dom';

const StyledOverview = styled(StyledContainer)`
  padding: 166px 0;
`;
const StyledLeft = styled.div`
  padding-right: 60px;
  width: 45%;
`;
const StyledRight = styled.div`
  width: 55%;
`;
const StyledVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }
`;
const StyledTitle = styled.h2`
  color: #01254F;
  font-size: 22px;
  margin-top: 0;
`;

const Overview = () => {
  return (
    <StyledOverview>
      <Flex justifyContent="space-between">
        <StyledLeft>
          <StyledTitle>Meet Your Host - Alistair Schultz</StyledTitle>
          <div>
            <p>With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.</p>

            <p>As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.</p>

            <p>At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.</p>
          </div>
          <Link to="/">See more&nbsp;&nbsp;&nbsp;{'>'}</Link>
        </StyledLeft>
        <StyledRight>
          <StyledVideo>
            <iframe src="https://www.youtube.com/embed/gIOyB9ZXn8s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </StyledVideo>
        </StyledRight>
      </Flex>
    </StyledOverview>
  )
}

export default Overview;
