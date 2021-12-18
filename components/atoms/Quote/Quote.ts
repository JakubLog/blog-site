import styled from 'styled-components';

export const Quote = styled.i`
  font-size: clamp(16px, 2vw, 18px);
  opacity: 0.7;
  display: block;
  padding-left: 12px;
  border-left: 3px solid black;
  margin-block: 10px;

  &::before,
  &::after {
    content: '~';
    padding-inline: 5px;
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    border: 0;
    padding: 0;
  }
`;