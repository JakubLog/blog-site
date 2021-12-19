import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 90px 25px 30px;
  max-height: 100%;
  overflow-y: auto;

  h1 {
    margin: 0;
    letter-spacing: 1px;
    position: relative;
    width: fit-content;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      width: 102%;
      z-index: -1;
      height: 40%;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 30px;
  }
`;