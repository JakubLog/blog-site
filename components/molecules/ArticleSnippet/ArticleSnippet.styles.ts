import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title';

export const Wrapper = styled.div`
  list-style-type: none;
  background-color: #fff;
  border-radius: 15px;
  margin-inline: 40px;
  box-shadow: 0 1px 30px -10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  transition: border 0.3s cubic-bezier(0.71, 0.69, 0.26, 0.85);
  border: 3px solid #fff;
  position: relative;

  &:hover,
  &:focus {
    outline: none;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:not(:last-child) {
    margin-bottom: 20px;
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
