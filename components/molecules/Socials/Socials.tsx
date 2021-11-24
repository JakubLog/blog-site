import React from 'react';
import Image from 'next/image';
import { socials } from 'assets/config/socials';
import { Wrapper, Social } from './Socials.styles';
import { nanoid } from 'nanoid';

const Socials = () => {
  return (
    <Wrapper>
      {socials.map(({ name, link, svg }) => (
        <Social key={nanoid()} aria-label={name} href={link} title={name} role="button" target="_blank" rel="noopener noreferrer">
          <Image width={35} alt={name} height={35} src={svg} />
        </Social>
      ))}
    </Wrapper>
  );
};

export default React.memo(Socials);
