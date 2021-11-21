import { NextPage } from 'next';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from 'components/atoms/Loading/Loading';

const Dashboard: NextPage = () => {
  return <div>Welcome to the Dashboard!</div>;
};
Dashboard.title = 'Admin';

export default withPageAuthRequired(Dashboard, { onRedirecting: () => <Loading /> });
