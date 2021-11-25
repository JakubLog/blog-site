/* eslint-disable prettier/prettier */
import axios from 'axios';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Wrapper, StyledTitle, Content } from 'styles/Article.styles';

interface props {
  article: {
    id: string;
    title: string;
    content: string;
    category: string;
  };
}

const BlogID: NextPage<props> = ({ article: { title, content, category } }) => {
  useEffect(() => {
    document.title = `Jakub Michał Fedoszczak | ${title}`;
  }, [title]);

  return (
    <Wrapper>
      <StyledTitle data-category={category}>{title}</StyledTitle>
      <Content>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Content>
    </Wrapper>
  );
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
