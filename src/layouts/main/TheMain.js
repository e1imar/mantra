import styled from '@emotion/styled';
import { getBgColor } from '../../utils/cssStyles';

const TheMain = styled.main`
  background-color: ${getBgColor};
  padding: calc(var(--header-height) + 30px) var(--left-right-paddings) 0 var(--left-right-paddings);
  min-height: 90vh;
  max-width: 1500px;
  margin: 0 auto 65px 0;
`;

export default TheMain;
