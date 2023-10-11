import styled from '@emotion/styled';
import { HorizontalLine, VerticalLine } from './Plus';
import { memo } from 'react';
import { getMainColor } from '../../../utils/cssStyles';
import PropTypes from "prop-types";

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

Delete.propTypes = {
    onClick: PropTypes.func
}

export default memo(Delete);
