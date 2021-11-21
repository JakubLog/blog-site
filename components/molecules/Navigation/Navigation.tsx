import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import AdminLinks from '../AdminLinks/AdminLinks';
import UserLinks from '../UserLinks/UserLinks';
import { Wrapper, Items } from './Navigation.styles';

interface props {
  isOpen: boolean;
}

const Navigation: React.FC<props> = ({ isOpen }) => {
  const { user } = useUser();

  return (
    <Wrapper role="menu">
      <Items aria-label="Navigation" aria-expanded={isOpen} role="tablist">
        <UserLinks />
        {user && <AdminLinks />}
      </Items>
    </Wrapper>
  );
};

export default React.memo(Navigation);
