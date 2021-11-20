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
  const allArticles = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const paths = allArticles.data.map((article: any) => {
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
  const article = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  return {
    props: {
      article: article.data
    }
  };
};

export default BlogID;
