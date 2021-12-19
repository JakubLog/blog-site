import styled from 'styled-components';

export const DeleteElement = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
  background: red;
  border-radius: 10px;
  opacity: 0.6;
  border: none;
  box-shadow: 0 3px 20px -10px red;
  transition: opacity 0.2s linear;
  color: white;
  font-weight: bold;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;