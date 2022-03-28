import styled, { css}  from 'styled-components';

export const lineClamp = (clamp = 2) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${clamp};
`;
