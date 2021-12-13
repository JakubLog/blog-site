import styled from 'styled-components';

export const Form = styled.form<{ inline?: boolean }>`
  input,
  textarea,
  button,
  select {
    margin: ${({ inline }) => (inline ? '0 5px' : '10px 0')};
  }

  ${(props) =>
    props.inline &&
    `
    padding-inline: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${props.theme.sizing.mobile}) {
      padding-inline: 40px;
    }
  `};
`;
