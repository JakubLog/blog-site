import axios from 'axios';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React, { useEffect } from 'react';

interface props {
  article: {
    id: string;
    title: string;
    content: string;
  };
}

const BlogID: NextPage<props> = ({ article }) => {
  useEffect(() => {
    document.title = `Jakub Michał Fedoszczak | ${article.title}`;
  }, [article.title]);

  return <div>Post number {article.id}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );
  const paths = allArticles.data.records.map((article: props['article']) => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
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
  }
  return {
    props: {
      article: []
    }
  };
};

export default BlogID;
