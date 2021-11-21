import { NextPage } from 'next';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Dashboard: NextPage = () => {
  return <div>Welcome to the Dashboard!</div>;
};
Dashboard.title = 'Admin';

export default withPageAuthRequired(Dashboard, { onRedirecting: () => <p>Loading...</p> });
