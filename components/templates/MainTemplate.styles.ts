import styled from 'styled-components';

export const Site = styled.div`
  height: 100vh;
  background-color: #eee;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 1fr 80px;
    main {
      grid-column: 2;
      grid-row: 1/3;
      box-shadow: inset 2px 0 20px -13px rgba(0, 0, 0, 0.75);
      padding: 10px;
    }
  }
`;

export const NavButton = styled.button<{ isOpen: boolean }>`
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  font-size: 30px;
  background: white;
  box-shadow: 0 2px 20px -13px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.secondaryDark};
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
  height: 60px;
  width: 60px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1100;
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }
  span:first-child {
    transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '0')});
  }
  span:last-child {
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  }
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    display: none;
  }
`;
