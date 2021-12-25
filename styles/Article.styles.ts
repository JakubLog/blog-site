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
    margin: 15px 0 40px;
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

  img {
    display: block;
    object-fit: cover;
    width: min(400px, 100%);
    margin: 25px auto;
    box-shadow: 0 3px 25px -7px rgba(0, 0, 0, 0.5);
  }

  blockquote {
    background: rgba(0, 90, 0, 0.1);
    margin-inline: 0;
    padding: 10px 20px 15px 60px;
    text-align: justify;
    font-weight: bold;
    letter-spacing: 1px;
    font-style: italic;
    opacity: 0.8;
    border-radius: 4px;
    position: relative;
    margin-bottom: 50px;

    strong {
      &::before,
      &::after {
        display: none;
      }

      padding: 0;
    }

    &::before {
      content: '“';
      position: absolute;
      left: 13px;
      top: 8px;
      opacity: 0.6;
      font-size: 55px;
    }

    &::after {
      content: attr(data-author);
      width: 100%;
      top: 100%;
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      position: absolute;
      left: 0;
      padding-right: 15px;
      padding-block: 5px;
      text-align: right;
      color: #eee;
      letter-spacing: 2px;
    }
  }

  cite {
    font-weight: bold;
    letter-spacing: 1px;
    padding-inline: 5px;
    opacity: 0.8;

    &::before {
      content: '"';
      padding-right: 2px;
      color: ${({ theme }) => theme.colors.secondaryDark};
    }

    &::after {
      content: '"';
      padding-left: 2px;
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  ul,
  ol {
    margin-block: 10px;
    padding: 0 0 0 30px;

    li {
      list-style-type: none;
      position: relative;
      line-height: 1.2;
      letter-spacing: 0.2px;

      &::before {
        content: '';
        width: 10px;
        height: 10px;
        background: ${({ theme }) => theme.colors.secondaryDark};
        position: absolute;
        left: -15px;
        top: 0;
        transform: translateY(50%) rotate(45deg);
      }

      &::after {
        content: '';
        width: 5px;
        height: 5px;
        background: ${({ theme }) => theme.colors.secondary};
        position: absolute;
        left: -13px;
        top: 5px;
        transform: translateY(50%) rotate(45deg);
      }

      ul {
        padding-left: 20px;
        padding-top: 3px;
      }

      @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
        font-size: 20px;
        line-height: 1.5;
        &::before {
          top: 5px;
        }

        &::after {
          top: 10px;
        }
      }
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

    img {
      width: min(600px, 100%);
      margin: 40px auto;
    }

    blockquote {
      width: min(700px, 80%);
      background: white;
      border-right: 5px solid ${({ theme }) => theme.colors.secondary};

      &::before {
        color: ${({ theme }) => theme.colors.secondaryDark};
        opacity: 0.5;
      }

      &::after {
        background: none;
        position: static;
        padding-left: 10px;
        color: ${({ theme }) => theme.colors.secondaryDark};
      }
    }
  }
`;
