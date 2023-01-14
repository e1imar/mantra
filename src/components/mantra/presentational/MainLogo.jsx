import styled from '@emotion/styled';

const MainLogo = styled.a`
  width: 188px;
  height: 24.5px;
  background-image: url("../../../assets/mantra/mainLogo.svg");
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-image: url("../../../assets/mantra/hoverLogo.svg");
    cursor: pointer;
  }
`;

export default MainLogo;
