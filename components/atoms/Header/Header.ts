import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  padding-block: 15px;
  margin: 0 0 20px;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondaryDark};
`;