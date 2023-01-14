import styled from '@emotion/styled';
import { getBgColor } from '../../utils/cssStyles';

const TheHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-color: ${getBgColor};
  align-items: center;
  height: var(--header-height);
  padding: 0 30px;
`;

export default TheHeader;
