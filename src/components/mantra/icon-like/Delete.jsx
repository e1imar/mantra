import styled from '@emotion/styled';
import { HorizontalLine, VerticalLine } from './Plus';
import { memo } from 'react';
import { getMainColor } from '../../../utils/cssStyles';

const DeleteContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  transform: rotate(45deg);

  &:hover div {
    background-color: ${getMainColor};
  }
`;

const Delete = ({ onClick }) => (
  <DeleteContainer onClick={onClick}>
    <HorizontalLine />
    <VerticalLine />
  </DeleteContainer>
);

export default memo(Delete);
