import React from 'react';
import Head from 'next/head';
import Loading from '../components/atoms/Loading/Loading';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import { Wrapper } from 'styles/Admin.styles';
import PostManageForm from '../components/organisms/PostManageForm/PostManageForm';
import ScheduledManager from '../components/organisms/ScheduledManager/ScheduledManager';
import PostManager from '../components/organisms/PostManager/PostManager';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper>
        <PostManageForm />
        <ScheduledManager />
        <PostManager />
      </Wrapper>
    </>
  );
};

Dashboard.title = 'Admin';

export default withPageAuthRequired<any>(Dashboard, {
  onRedirecting: () => <Loading />
});
