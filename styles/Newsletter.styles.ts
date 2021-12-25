import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  justify-content: center;

  & > div {
    padding-inline: 25px;
    width: 100%;

    span {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }

    p {
      letter-spacing: 0.8px;
    }

    h2 {
      margin: 0 0 8px;
      letter-spacing: 1px;
    }

    form {
      margin-block: 20px;
    }

    @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
      width: min(100%, 900px);
      margin: 0 auto;

      h2 {
        font-size: 35px;
      }

      p {
        font-size: 18px;
      }
    }
  }
`;