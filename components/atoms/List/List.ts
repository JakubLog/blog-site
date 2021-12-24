import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;

  li {
    list-style-type: none;
    position: relative;
    padding-left: 6px;
    line-height: 1.3;
    letter-spacing: 0.2px;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.colors.secondaryDark};
      position: absolute;
      left: -15px;
      top: 0;
      transform: translateY(50%) rotate(45deg);
    }

    &::after {
      content: '';
      width: 5px;
      height: 5px;
      background: ${({ theme }) => theme.colors.secondary};
      position: absolute;
      left: -13px;
      top: 5px;
      transform: translateY(50%) rotate(45deg);
    }

    ul {
      padding-left: 20px;
      padding-top: 3px;
    }

    @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
      font-size: 20px;
      line-height: 1.5;
      &::before {
        top: 5px;
      }

      &::after {
        top: 10px;
      }
    }
  }
`;
