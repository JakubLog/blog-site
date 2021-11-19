import { navigation } from 'assets/navigation';
import { nanoid } from 'nanoid';
import React from 'react';
import { Wrapper, Items, Item } from './Navigation.styles';

interface props {
  isOpen: boolean;
}

const Navigation: React.FC<props> = ({ isOpen }) => {
  return (
    <Wrapper role="menu">
      <Items aria-label="Navigation" aria-expanded={isOpen} role="tablist">
        {navigation.map(({ alt, to, blank, content }) => (
          <Item key={nanoid()} aria-role="tab" aria-label={alt} to={to} target={blank ? '_blank' : ''}>
            {content}
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
};

export default Navigation;
