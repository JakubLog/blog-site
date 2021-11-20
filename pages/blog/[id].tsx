import axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

interface props {
  article: any;
}

const BlogID: NextPage<props> = ({ article }) => {
  useEffect(() => {
    document.title = `Jakub Michał Fedoszczak | ${article.title}`;
  }, []);

  return <div>Post number {article.id}</div>;
};

export const getStaticPaths = async () => {
  const allArticles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );
  const paths = allArticles.data.records.map((article: any) => {
    return {
      params: {
        id: article.id.toString()
      }
    };
  });

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = async ({ params }: any) => {
  const article = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles', id: params.id },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );

  return {
    props: {
      article: article.data.records[0]
    }
  };
};

export default BlogID;
