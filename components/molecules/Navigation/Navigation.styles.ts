import NavLink from 'components/atoms/NavLink/NavLink';
import styled from 'styled-components';

export const Wrapper = styled.nav``;
export const Items = styled.ul`
  padding: 0;
  margin: 0;
  padding: 10px 15%;
  & > span > a {
    padding: 20px 40px;
  }
  & > span {
    padding: 20px 40px;
    display: block;
    width: fit-content;
    margin: 0 auto;
    position: relative;
    font-weight: bold;
    font-size: clamp(20px, 2vw, 24px);
    opacity: 0.6;
    transition: opacity 0.2s linear;
    &::before {
      content: '';
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.secondary};
      z-index: -1;
      transition: opacity 0.2s linear;
      opacity: 0;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 100%;
      background-color: white;
      z-index: -1;
    }
    &:hover {
      opacity: 1;
    }
    &.active {
      opacity: 1;
      &::before {
        opacity: 1;
      }
    }
  }
`;
export const Item = styled(NavLink)``;
