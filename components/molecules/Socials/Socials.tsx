import React from 'react';
import Image from 'next/image';
import { socials } from 'assets/config/socials';
import { Wrapper, Social } from './Socials.styles';

const Socials = () => {
  return (
    <Wrapper>
      {socials.map(({ name, link, svg }) => (
        <Social href={link} title={name} role="button" target="_blank" rel="noopener noreferrer">
          <Image width={35} alt={name} height={35} src={svg} />
        </Social>
      ))}
    </Wrapper>
  );
};

export default Socials;
