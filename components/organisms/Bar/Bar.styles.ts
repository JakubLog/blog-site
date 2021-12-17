import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const LogoutButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 9px 19px;
  background: rgba(255, 0, 0, 0.2);
  border: 2px solid red;
  border-radius: 12px;
  box-shadow: 0 2px 20px -12px red;
  color: red;
  opacity: 0.6;
  transition: opacity 0.2s cubic-bezier(0.23, 0.86, 0.56, 0.56);

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 5px 15px;
    right: 17px;
  }
`;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  left: 0;
  top: 0;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  display: grid;
  grid-template-rows: 300px auto;
  z-index: 9999;
  align-content: center;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    position: relative;
    transform: none;
    width: unset;
    min-height: unset;
    align-content: unset;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 25px;

  & > span {
    border-radius: 50%;
    box-shadow: 0 2px 15px -8px #000;
  }
`;
export const StyledTitle = styled(Title)`
  margin-top: 20px;
  font-size: clamp(26px, 2vw, 32px);
  position: relative;
  pointer-events: none;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 102%;
    opacity: 0.7;
    height: 50%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    position: absolute;
    content: '~ Full-stack Developer ~';
    bottom: -22px;
    left: 0;
    text-align: center;
    font-size: clamp(12px, 2vw, 16px);
    opacity: 0.6;
    letter-spacing: 3px;
    width: 100%;
  }
`;
