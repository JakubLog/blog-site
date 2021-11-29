import { Title } from 'components/atoms/Title/Title';
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
export const StyledTitle = styled(Title)`
  width: fit-content;
  margin: 15px auto;
  font-size: clamp(40px, 4vw, 60px);
  position: relative;

  &::before {
    content: attr(data-category);
    width: 100vw;
    position: absolute;
    top: -15px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    font-size: 14px;
    opacity: 0.5;
    letter-spacing: 2px;
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    margin: 0;
    margin-top: 15px;
    margin-bottom: 40px;
    z-index: 100;
    line-height: 0.9;
    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 40%;
      opacity: 0.7;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }

    &::before {
      width: auto;
      bottom: -20px;
      left: 0;
      font-size: 16px;
      top: auto;
      transform: none;
      text-align: left;
    }
  }
`;
export const Content = styled.div`
  padding-top: 10px;
  margin-top: 10px;
  border-top: 10px solid ${({ theme }) => theme.colors.secondaryDark};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-left: 15px ${({ theme }) => theme.colors.secondaryDark} solid;
    padding: 7px 0 7px 12px;
    background-color: rgba(0, 90, 0, 0.1);
  }

  p {
    text-align: justify;
    line-height: 1.6;
  }

  em {
    background-color: rgba(0, 150, 0, 0.8);
    font-weight: bold;
    padding: 3px 5px;
    color: white;
  }

  strong {
    text-transform: uppercase;
    position: relative;
    z-index: 2;
    padding-inline: 5px;

    &::after {
      position: absolute;
      content: '';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 30%;
      opacity: 0.6;
      z-index: -1;
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondaryDark};
    opacity: 0.5;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryDark};
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 0;
    margin: 30px 0 0;
    border: none;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border-left: none;
      background: none;
      padding: 0;

      &::before {
        content: '#';
        margin-right: 8px;
        text-shadow: 1px 2px 2px ${({ theme }) => theme.colors.secondaryDark};
      }
    }

    p {
      padding-right: 20px;
      font-size: 18px;
    }
  }
`;
