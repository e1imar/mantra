import styled from '@emotion/styled';
import { isDarkMode } from '../../utils/cssStyles';

const TheFooter = styled.footer`
  background-color: ${props => isDarkMode(props) ? '#000' : '#fbfbfb'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  min-height: 150px;

  @media screen and (max-width: 640px) {
    min-height: 330px;
  }

  & span {
    font-family: Roboto, sans-serif;
    text-transform: lowercase;
    color: #787878;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: .54em;
  }
`;

export default TheFooter;
