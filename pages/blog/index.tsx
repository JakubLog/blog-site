/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import { List, Wrapper } from 'styles/Articles.styles';
import ArticleSnippet from '../../components/molecules/ArticleSnippet/ArticleSnippet';
import { nanoid } from 'nanoid';

interface props {
  allArticles: any;
}

const Blog: NextPage<props> = ({ allArticles }) => {
  return (
    <Wrapper>
      <List>
        {allArticles.map((article: any) => (
          <>
            <ArticleSnippet data={article} key={nanoid()} />
            <ArticleSnippet data={article} key={nanoid()} />
            <ArticleSnippet data={article} key={nanoid()} />
          </>
        ))}
      </List>
    </Wrapper>
  );
};
Blog.title = 'Blog';

export const getServerSideProps = async () => {
  const allArticles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );

  return {
    props: { allArticles: allArticles.data.records }
  };
};

export default Blog;
