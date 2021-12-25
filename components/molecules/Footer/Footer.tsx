import React from 'react';
import { Wrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <p>Jakub Michał Fedoszczak 2021-2022 &copy; All rights reserved.</p>
    </Wrapper>
  );
};

export default React.memo(Footer);
