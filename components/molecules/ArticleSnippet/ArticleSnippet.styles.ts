import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)<{ isNew: boolean }>`
  list-style-type: none;
  background-color: #fff;
  border-radius: 15px;
  margin-inline: 40px;
  box-shadow: 0 1px 30px -10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px 15px;
  transition: border 0.3s cubic-bezier(0.71, 0.69, 0.26, 0.85), opacity 0.2s cubic-bezier(0.57, 0.63, 0, 1.01);
  border: 3px solid #fff;
  position: relative;
  z-index: 10;
  opacity: 0.8;

  &:hover,
  &:focus {
    outline: none;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }

  ${({ isNew, theme }) =>
    isNew
      ? `
      opacity: 1;
      box-shadow: 0 2px 35px -10px rgba(0, 0, 0, 0.1);
    &::after {
      content: "New";
      position: absolute; 
      right: 15px;
      top: -28px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 25px;
      background-color: ${theme.colors.secondary};
      border-radius: 6px 6px 0 0;
      box-shadow: inset 0 -10px 25px -18px black;
      color: ${theme.colors.primary};
    }
  `
      : null}
  &:not(:last-child) {
    margin-bottom: 20px;
    @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
      margin-bottom: 0;
    }
  }
`;

export const StyledTitle = styled(Title)`
  font-size: clamp(25px, 2vw, 30px);
  position: relative;
  z-index: 100;
  width: 100%;
  padding-left: 10px;
  margin-bottom: 25px;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    opacity: 0.5;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    content: attr(data-category);
    bottom: -30px;
    opacity: 0.6;
    letter-spacing: 1px;
    left: 10px;
    font-size: clamp(14px, 2vw, 16px);
    position: absolute;
    transform: translateY(-50%);
  }
`;
export const Description = styled.p`
  margin: 0;
  padding: 10px;
  font-size: clamp(12px, 2vw, 16px);
  opacity: 0.7;
  letter-spacing: 1px;
`;
export const Date = styled.p`
  position: absolute;
  right: 7px;
  bottom: -9px;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.7;
  letter-spacing: 1px;
`;