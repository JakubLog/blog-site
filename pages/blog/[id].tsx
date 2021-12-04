/* eslint-disable prettier/prettier */
import { GetStaticProps, NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Content, StyledTitle, Wrapper } from 'styles/Article.styles';
import Sources from '../../components/organisms/Sources/Sources';
import { useRouter } from 'next/router';
import { addHeaderIds, addHeaderTab, getHeaders, updateURL } from '../../helpers/article';
import axios from 'axios';
import Error404 from '../404';

interface props {
  article: {
    status?: string;
    id: string;
    title: string;
    content: string;
    category: string;
    sources?: {
      name: string;
      url: string;
    }[];
  };
}

const BlogID: NextPage<props> = ({ article }) => {
  const { isFallback } = useRouter();
  // eslint-disable-next-line
  const observer = useRef<any>(null);
  useEffect(() => {
    if (article?.title) {
      document.title = `Jakub Michał Fedoszczak | ${article.title}`;
    }
  }, [article?.title]);
  useEffect(() => {
    if (article) {
      addHeaderIds();
      addHeaderTab();

      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateURL(entry.target.id);
            }
          });
        },
        { threshold: 1, root: document }
      );

      setTimeout(() => {
        getHeaders().forEach((header: Element) => {
          observer.current.observe(header);
        });
      }, 2000);

      return () => {
        observer.current.disconnect();
      };
    }
  }, [article]);

  if (isFallback) {
    return <p>Loading...</p>;
  }

  if (article?.status === 'not-found') {
    return <Error404 />;
  }

  return (
    <Wrapper>
      <StyledTitle data-category={article.category}>{article.title}</StyledTitle>
      <Content id='article'>
        <ReactMarkdown>
          {article.content}
        </ReactMarkdown>
      </Content>
      {article.sources && <Sources data={article.sources} />}
    </Wrapper>
  );

};

export const getStaticPaths = async () => {
  const allArticles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );

  if (!allArticles.data.records) return { paths: [{ params: { id: 1 } }] };

  const paths = allArticles.data.records.map((article: props['article']) => ({
    params: {
      id: article.id.toString()
    }
  }));

  return {
    paths,
    fallback: true
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles', id: params?.id as string | undefined || 1 },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );

  return {
    props: {
      article: article.data.records?.[0] || { status: 'not-found' }
    }
  };
};

export default BlogID;
