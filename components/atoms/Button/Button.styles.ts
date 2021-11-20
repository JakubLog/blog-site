import styled from 'styled-components';

export const Wrapper = styled.button<{ isNav?: boolean }>`
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  font-size: clamp(16px, 2vw, 22px);
  background: white;
  padding: 7px 15px;
  box-shadow: 0 2px 20px -13px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.secondaryDark};
  cursor: pointer;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition: color 0.5s cubic-bezier(0.85, 0.84, 0.5, 1.01);
  span {
    position: relative;
    z-index: 100;
    font-weight: bold;
    letter-spacing: 1px;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    transition: transform 0.5s ease-in-out;
    z-index: 1;
  }
  &:hover::before {
    transform: translateX(0);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;