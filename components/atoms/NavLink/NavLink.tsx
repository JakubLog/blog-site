import React from 'react';
import { useRouter } from 'next/router';
import { StyledLink } from './NavLink.styles';

interface props {
  to: string;
  target?: string;
}

const NavLink: React.FC<props> = ({ to, children, target }) => {
  const { asPath } = useRouter();

  return (
    <a className={asPath === to ? 'active' : 'no-active'}>
      <StyledLink href={to}>
        <a target={target} rel="noreferrer">
          {children}
        </a>
      </StyledLink>
    </a>
  );
};

export default NavLink;
