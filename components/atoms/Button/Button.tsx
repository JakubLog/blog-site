import React from 'react';
import { Wrapper } from './Button.styles';

interface props {
  isNav?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<props> = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <span>{children}</span>
    </Wrapper>
  );
};

export default Button;
