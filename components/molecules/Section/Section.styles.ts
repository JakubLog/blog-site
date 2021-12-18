import { Title } from '../../atoms/Title/Title';
import styled from 'styled-components';

export const StyledTitle = styled(Title)`
  font-size: clamp(20px, 2vw, 22px);
  letter-spacing: 0.5px;
`;

export const Wrapper = styled.div`
  margin-block: 30px;

  header {
    padding-left: 8px;
    border-left: 10px solid ${({ theme }) => theme.colors.secondary};
    margin-bottom: 10px;
  }

  & > div {
    border-block: 3px solid ${({ theme }) => theme.colors.secondaryDark};
    padding: 10px 5px;
    text-align: justify;

    * {
      margin: 0;
    }

    p {
      margin-bottom: 7px;
      font-size: clamp(16px, 2vw, 18px);
    }

    a {
      text-decoration: underline;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    margin-block: 50px;

    header {
      margin-bottom: 20px;
    }

    & > div {
      padding: 20px 10px;
    }
  }
`;