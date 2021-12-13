import styled from 'styled-components';

export const TextArea = styled.textarea`
  resize: vertical;
  min-height: 50vh;
  font-size: clamp(14px, 2vw, 18px);
  padding: 8px 10px;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  outline: none;

  &:focus {
    background: #fefefe;
    border: 3px solid ${({ theme }) => theme.colors.secondaryDark};
  }
`;
