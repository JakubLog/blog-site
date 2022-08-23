/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { AddButton, List, PageButton, PageCounter, PageNavigation, Wrapper } from 'styles/Articles.styles';
import ArticleSnippet from '../../components/molecules/ArticleSnippet/ArticleSnippet';
import { nanoid } from 'nanoid';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/dist/client/link';
import Button from '../../components/atoms/Button/Button';
// @ts-ignore
import paginate from 'paginatejson';
import { ExtendedNextPage } from '../../types/NextPage';
import axios from 'axios';

interface props {
  allArticles: any;
}

const Blog: ExtendedNextPage<props> = ({ allArticles }) => {
  const { user } = useUser();
  const [articles, setArticles] = useState(paginate.paginate(allArticles, 1, 8));

  const nextPage = () => setArticles(paginate.paginate(allArticles, articles.next, 8));

  const prevPage = () => setArticles(paginate.paginate(allArticles, articles.prev, 8));

  return (
    <Wrapper>
      <List>
        {articles.items.map((article: any, i: number) => (
          <ArticleSnippet data={article} key={nanoid()} isNew={i === 0 && articles.current === articles.first} />
        ))}
        {allArticles.length > 8 && (
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
        )}
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
  const { data: articles } = await axios.get(
    'https://api.fedoszczak.ovh/api/v1/blog/posts'
  );
  const preparedArticles = articles.data.reverse();

  return {
    props: { allArticles: preparedArticles }
  };
};

export default Blog;
