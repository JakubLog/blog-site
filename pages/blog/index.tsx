/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { AddButton, List, PageButton, PageCounter, PageNavigation, Wrapper } from 'styles/Articles.styles';
import ArticleSnippet from '../../components/molecules/ArticleSnippet/ArticleSnippet';
import { nanoid } from 'nanoid';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/dist/client/link';
import Button from '../../components/atoms/Button/Button';
// @ts-ignore
import paginate from 'paginatejson';

interface props {
  allArticles: any;
}

const Blog: NextPage<props> = ({ allArticles }) => {
  const { user } = useUser();
  const [articles, setArticles] = useState(paginate.paginate(allArticles, 1, 8));

  console.log(articles);

  const nextPage = () =>
    setArticles(paginate.paginate(allArticles, articles.next, 8));

  const prevPage = () =>
    setArticles(paginate.paginate(allArticles, articles.prev, 8));

  return (
    <Wrapper>
      <List>
        {articles.items.map((article: any, i: number) => (
          <ArticleSnippet data={article} key={nanoid()} isNew={i === 0 && articles.current === articles.first} />
        ))}
        {allArticles.length > 8 &&
        <nav>
          <PageNavigation>
            <PageButton onClick={prevPage} disabled={articles.current === 1}>
              Prev
            </PageButton>
            <PageCounter>
              {articles.current} / {articles.last}
            </PageCounter>
            <PageButton onClick={nextPage} disabled={articles.last === articles.current}>
              Next
            </PageButton>
          </PageNavigation>
        </nav>
        }
        {user && (
          <Link href={'/admin'}>
            <AddButton>
              <Button>+</Button>
            </AddButton>
          </Link>
        )}
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
  const preparedArticles = allArticles.data.records.reverse();

  return {
    props: { allArticles: preparedArticles }
  };
};

export default Blog;
