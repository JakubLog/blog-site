import React from 'react';
import Head from 'next/head';
import Loading from '../components/atoms/Loading/Loading';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import { Wrapper } from 'styles/Admin.styles';
import PostManageForm from '../components/organisms/PostManageForm/PostManageForm';
import ScheduledManager from '../components/organisms/ScheduledManager/ScheduledManager';
import PostManager from '../components/organisms/PostManager/PostManager';
import { article } from './article';
import axios from 'axios';

interface props {
  articles: article[];
}

const Dashboard: NextPage<props> = ({ articles }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper>
        <PostManageForm />
        <ScheduledManager />
        <PostManager articles={articles} />
      </Wrapper>
    </>
  );
};

Dashboard.title = 'Admin';

export const getServerSideProps = async () => {
  const {
    data: { records: articles }
  } = await axios.get('https://api.m3o.com/v1/db/Read?table=articles', {
    headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` }
  });

  return {
    props: {
      articles
    }
  };
};

export default withPageAuthRequired<any>(Dashboard, {
  onRedirecting: () => <Loading />
});
