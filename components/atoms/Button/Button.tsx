import React from 'react';
import { Wrapper } from './Button.styles';

interface props {
  isNav?: boolean;
}

const Button: React.FC<props> = ({ children, isNav }) => {
  return (
    <Wrapper isNav>
      <span>{children}</span>
    </Wrapper>
  );
};

export default Button;
