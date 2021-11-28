import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 20px 20px;
  max-height: 100%;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    overflow-y: auto;
    padding-top: 20px;
    padding-inline: 30px;
    max-height: 100vh;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 30px 0;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 20px;
  }
`;

export const AddButton = styled.div`
  grid-column: 1/3;
  width: fit-content;
  margin: 50px auto 0;
`;
