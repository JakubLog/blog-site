import React from 'react';
import Image from 'next/image';
import { Wrapper, Header, StyledTitle } from './Bar.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import Socials from 'components/molecules/Socials/Socials';

interface props {
  isOpen: boolean;
}

const Bar: React.FC<props> = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
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
