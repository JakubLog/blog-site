import React from 'react';
import { useRouter } from 'next/router';
import { StyledLink } from './NavLink.styles';

interface props {
  to: string;
  alternate?: string;
}

const NavLink: React.FC<props> = ({ to, children, alternate }) => {
  const { asPath } = useRouter();

  return (
    <span tabIndex={-1} aria-role="tab" aria-label={alternate} className={asPath === to ? 'active' : 'no-active'}>
      <StyledLink href={to}>{children}</StyledLink>
    </span>
  );
};

export default NavLink;
