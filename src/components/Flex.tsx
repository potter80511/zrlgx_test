import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import arrowCircle from '../../../svg/arrow.svg'

type FlexProps = {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  children: ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent};
  align-items:  ${({alignItems}) => alignItems};
  flex-direction: ${({flexDirection}) => flexDirection};
  flex-wrap: ${({flexWrap}) => flexWrap};
`

const Flex = (props: FlexProps) => {
  const {
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    children,
  } = props;

  return (
    <StyledFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
    >
      {children}
    </StyledFlex>
  )
}

export default Flex;
