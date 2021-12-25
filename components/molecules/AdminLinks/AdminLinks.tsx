import React from 'react';
import { adminNavigation } from 'assets/config/navigation';
import { nanoid } from 'nanoid';
import { Item } from '../Navigation/Navigation.styles';

const AdminLinks = () => {
  return (
    <>
      {adminNavigation.map(({ alt, to, content }) => (
        <Item key={nanoid()} alternate={alt} to={to}>
          {content}
        </Item>
      ))}
    </>
  );
};

export default AdminLinks;
