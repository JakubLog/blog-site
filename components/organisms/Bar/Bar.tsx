import React from 'react';
import Image from 'next/image';
import { Header, LogoutButton, StyledTitle, Wrapper } from './Bar.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import Socials from 'components/molecules/Socials/Socials';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

interface props {
  isOpen: boolean;
}

const Bar: React.FC<props> = ({ isOpen }) => {
  const { user } = useUser();
  const { replace } = useRouter();

  const handleLogout = async () => {
    if (user) {
      try {
        await replace('/api/auth/logout');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper isOpen={isOpen}>
      {user && (
        <LogoutButton onClick={handleLogout}>
          <Image height={50} width={50} src={'https://cdn.iconscout.com/icon/free/png-256/logout-2032031-1713022.png'} alt="Logout image" />
        </LogoutButton>
      )}
      <Header>
        <Image title="Jacob's photo" width={200} height={200} src="https://avatars.githubusercontent.com/u/77537823?v=4" alt="Jacob's photo" />
        <StyledTitle>Jakub Michał Fedoszczak</StyledTitle>
      </Header>
      <Navigation isOpen={isOpen} />
      <Socials />
    </Wrapper>
  );
};

export default React.memo(Bar);
