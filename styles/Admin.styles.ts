import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px 50px;
  overflow-y: auto;
  min-height: 100vh;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 15px 80px;
    overflow-y: auto;
    max-height: 100vh;
  }
`;

export const TableOfPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px 10px;
  margin-block: 8px;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 10px 20px;
  }
`;

export const PostRecord = styled.div<{ danger?: boolean }>`
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 15px -11px rgba(0, 0, 0, 0.5);
  position: relative;

  ${({ danger }) =>
    danger &&
    `
    background-color: rgba(200, 0, 0, 0.4);
    filter: blur(1px);
    &::after {
      content: "Error detected";
      font-size: clamp(20px, 2vw, 30px);
      color: yellow;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    };
    &:hover {
      filter: blur(0px);
    }
    `}
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  * {
    margin: 0;
  }

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.7px;
    font-size: clamp(20px, 2vw, 24px);
    opacity: 0.8;
    transition: opacity 0.15s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  p {
    opacity: 0.6;
    letter-spacing: 0.2px;
    font-size: clamp(14px, 1vw, 16px);
  }

  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    font-weight: bold;
    font-size: clamp(18px, 2vw, 22px);
    background-color: transparent;
    padding: 20px;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 20px 30px;
  }
`;