import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  margin-top: 20px;
  border-top: 5px solid ${({ theme }) => theme.colors.secondary};

  p {
    font-size: clamp(18px, 2vw, 20px);
    margin-right: 10px;
    font-weight: bold;
    opacity: 0.8;
  }

  button {
    margin-inline: 5px;
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding-top: 10px;
    margin-top: 25px;
  }
`;
