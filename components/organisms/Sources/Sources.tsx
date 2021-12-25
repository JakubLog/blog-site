import React from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title';

export const Wrapper = styled.div`
  margin-top: 40px;
  padding-inline: 10px;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding: 0;
  }
`;
export const StyledTitle = styled(Title)`
  font-size: clamp(26px, 4vw, 30px);
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    text-align: left;
    padding-left: 10px;
  }
`;
export const ListOfSources = styled.ul`
  padding: 0;
  margin: 0;
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    padding-left: 40px;
  }
`;
export const Source = styled.li`
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  text-align: center;
  font-size: clamp(20px, 2vw, 24px);
  margin: 10px 0;
  padding: 5px 0;
  opacity: 0.4;
  transition: opacity 0.3s cubic-bezier(0.76, 0.76, 0.48, 0.97);
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    text-align: left;
    background-color: transparent;
    opacity: 0.8;
    padding: 0;
    position: relative;
    margin: 12px 0 0;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20%;
      transition: transform 0.1s linear;
    }

    &::before {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    &:hover::before,
    &:focus::before {
      transform: translateY(-50%) rotate(45deg);
    }

    &:hover::after,
    &:focus::after {
      transform: translateY(-50%) rotate(-45deg);
    }
  }
`;
export const SourceName = styled.p`
  margin: 0;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: ${({ theme }) => theme.sizing.mobile}) {
    color: black;
  }
`;

interface props {
  data: {
    name: string;
    url: string;
  }[];
}

const Sources: React.FC<props> = ({ data: sources }) => {
  return (
    <Wrapper>
      <StyledTitle>Sources 🔗</StyledTitle>
      <ListOfSources>
        {sources.map(({ name, url }) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link key={nanoid()} href={url}>
            <Source aria-label={`Source - ${name}`} tabIndex={1}>
              <SourceName>{name}</SourceName>
            </Source>
          </Link>
        ))}
      </ListOfSources>
    </Wrapper>
  );
};

export default Sources;
