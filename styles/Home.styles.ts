import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 25px 50px;
  max-height: 100%;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 25px 40px 25px 30px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
export const StyledTitle = styled(Title)`
  font-size: clamp(24px, 2vw, 28px);
  text-align: justify;
  letter-spacing: 1px;

  strong {
    color: ${({ theme }) => theme.colors.secondaryDark};
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    margin-bottom: 10px;
    text-align: left;
  }
`;