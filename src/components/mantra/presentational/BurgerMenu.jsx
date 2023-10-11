import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getMainColor } from '../../../utils/cssStyles';
import PropTypes from "prop-types";

export const Container = styled.button`
  position: fixed;
  z-index: 25;
  right: 24px;
  top: 12px;
  height: 35px;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 400px) {
    right: 15px;
  }

  & .burger {
    width: 35px;
    height: 2px;
    background-color: ${getMainColor};
    border-radius: 5px;
    transition: all .6s ease-in-out;
    display: flex;

    &::before,
    &::after {
      content: '';
      transition: all .6s ease-in-out;
      position: absolute;
      width: 35px;
      height: 2px;
      background-color: ${getMainColor};
      border-radius: 10px;
    }

    &::before {
      transform: translateY(-10px);
    }

    &::after {
      transform: translateY(10px);
    }
  }

  ${({isOpen}) => isOpen && css`
    .burger {
      transform: translateX(50px);
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(-35px, 35px);
      }

      &::after {
        transform: rotate(-45deg) translate(-35px, -35px);
      }

    }
  `}

  &:hover {
    opacity: 0.7;
  }


  @media (max-width: 640px) {
    & .burger {
      transition: transform 0.3s ease;

      &::before,
      &::after {
        transition: all .3s ease-in-out;
      }
    }
  }
`;

export const BurgerMenu = ({ isOpen, onClick }) => (
  <Container isOpen={isOpen} onClick={onClick}>
    <div className="burger"/>
  </Container>
)

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
}