import styled from '@emotion/styled';
import { isDarkMode } from '../../utils/cssStyles';

const TheFooter = styled.footer`
  background-color: ${props => isDarkMode(props) ? '#000' : '#fbfbfb'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  min-height: 220px;

  @media screen and (max-width: 640px) {
    min-height: 330px;
  }
`;

export default TheFooter;
