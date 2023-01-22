import styled from '@emotion/styled';
import { getMainColor } from '../../../utils/cssStyles';
import { memo } from 'react';

export const HorizontalLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  width: 100%;
  background-color: var(--gray-darker);
  border-radius: var(--border-radius);
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 2px;
  background-color: var(--gray-darker);
  border-radius: var(--border-radius);
`;

const PlusContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  
  &:hover div {
    background-color: ${getMainColor};
  }
`;

const Plus = memo(({ onClick }) => (
  <PlusContainer onClick={onClick}>
    <HorizontalLine />
    <VerticalLine />
  </PlusContainer>
));

export default Plus;
