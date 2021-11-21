import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const AppProviders: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserProvider>
  );
};

export default AppProviders;
