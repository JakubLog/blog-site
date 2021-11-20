import React from 'react';
import { useRouter } from 'next/router';
import { StyledLink, MiddleLink } from './NavLink.styles';

interface props {
  to: string;
  target?: string;
}

const NavLink: React.FC<props> = ({ to, children, target }) => {
  const { asPath } = useRouter();

  return (
    <a className={asPath === to ? 'active' : 'no-active'}>
      <StyledLink href={to}>
        <MiddleLink target={target} isTarget={target !== ''} rel="noreferrer" style={{ cursor: 'pointer' }}>
          {children}
        </MiddleLink>
      </StyledLink>
    </a>
  );
};

export default NavLink;
