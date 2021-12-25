import React from 'react';
import { navigation } from 'assets/config/navigation';
import { nanoid } from 'nanoid';
import { Item } from '../Navigation/Navigation.styles';

const AdminLinks = () => {
  return (
    <>
      {navigation.map(({ alt, to, content }) => (
        <Item key={nanoid()} alternate={alt} to={to}>
          {content}
        </Item>
      ))}
    </>
  );
};

export default React.memo(AdminLinks);
