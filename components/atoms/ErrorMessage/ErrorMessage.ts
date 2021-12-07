import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-weight: bold;
  opacity: 0.9;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
