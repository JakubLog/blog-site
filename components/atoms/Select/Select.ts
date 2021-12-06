import styled from 'styled-components';

export const Select = styled.select`
  font-size: 25px;
  padding: 15px 10px;
  width: 100%;
  border: 4px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 5px;
`;
