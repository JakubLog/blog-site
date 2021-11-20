import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: 15px;
  z-index: 1000;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    bottom: 10px;
    width: 100%;
    right: auto;
    top: auto;
    flex-direction: row;
  }
`;
export const Social = styled.a`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0.7;
  transition: transform 0.2s ease-in-out, opacity 0.3s linear;
  text-decoration: none;
  color: black;
  transform: scale(0.8);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #333;
    opacity: 0.2;
    transform: scale(0);
    transition: transform 0.3s linear;
  }
  &:hover::before,
  &:focus::before {
    transform: scale(1);
  }
  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1);
    transform: translateY(-5px);
  }
`;
