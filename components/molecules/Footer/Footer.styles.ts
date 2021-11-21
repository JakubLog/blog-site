import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: #ddd;
  position: relative;
  z-index: 1200;
  p {
    text-align: center;
    padding-block: 15px;
    opacity: 0.8;
    font-size: clamp(13px, 2vw, 16px);
  }
`;
