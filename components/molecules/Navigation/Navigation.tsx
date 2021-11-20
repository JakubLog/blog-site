import { navigation } from 'assets/config/navigation';
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
        {navigation.map(({ alt, to, content }) => (
          <Item key={nanoid()} alternate={alt} to={to}>
            {content}
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
};

export default Navigation;
