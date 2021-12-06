import styled from 'styled-components';

export const TextArea = styled.textarea`
  font-size: 25px;
  padding: 15px 10px;
  width: 100%;
  border: 4px solid ${({ theme }) => theme.colors.secondaryDark};
  resize: vertical;
  min-height: 50vh;
  border-radius: 5px;
`;