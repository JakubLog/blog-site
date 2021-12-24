import styled from 'styled-components';

export const Header = styled.div`
  text-align: center;
  padding-block: 15px;
  margin: 0 0 20px;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondaryDark};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;

  h1 {
    margin: 0;
  }
`;
