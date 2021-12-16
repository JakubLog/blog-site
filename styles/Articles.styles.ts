import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 20px 20px;
  max-height: 100%;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    overflow-y: auto;
    padding-top: 20px;
    padding-inline: 30px;
    max-height: 100vh;
    padding-bottom: 100px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 30px 0;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 20px;
  }
`;

export const AddButton = styled.div`
  grid-column: 1/3;
  width: fit-content;
  margin: 50px auto 0;
`;

export const PageButton = styled.button`
  padding: 10px 15px;
  width: fit-content;
  border: none;
  outline: none;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  position: relative;
  font-size: 20px;

  &::before {
    background: rgba(0, 0, 0, 0.1);
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 12px;
    transform-origin: center;
    transform: translate(-50%, -50%);
    opacity: 0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    font-size: 18px;
    padding: 7px 12px;
  }
`;

export const PageNavigation = styled.div`
  position: static;
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    position: absolute;
    z-index: 100;
    padding: 30px 50px 40px 50px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px 20px 0 0;
  }
`;

export const PageCounter = styled.div`
  margin-inline: 15px;
  padding: 7px 10px;
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-weight: bold;
  font-size: 20px;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    font-size: 18px;
    padding: 5px 8px;
  }
`;