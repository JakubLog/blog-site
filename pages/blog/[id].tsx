/* eslint-disable prettier/prettier */
import { GetStaticProps, NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Content, StyledTitle, Wrapper } from 'styles/Article.styles';
import Sources from '../../components/organisms/Sources/Sources';
import { useRouter } from 'next/router';
import { addHeaderARIA, addHeaderIds, getHeaders, updateURL } from '../../helpers/article';
import axios from 'axios';
import Error404 from '../404';
import Loading from '../../components/atoms/Loading/Loading';
import { DeleteElement } from '../../components/atoms/DeleteElement/DeleteElement';
import { useUser } from '@auth0/nextjs-auth0';
import ShareIcons from '../../components/molecules/ShareIcons/ShareIcons';
import Image from 'next/image';

interface props {
  article: {
    status?: string;
    id: string;
    title: string;
    content: string;
    category: string;
    friendly: string;
    sources?: {
      name: string;
      url: string;
    }[];
  };
}

const BlogID: NextPage<props> = ({ article }) => {
  const { isFallback, push } = useRouter();
  const { user } = useUser();

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
      addHeaderARIA();

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
    return <Loading />;
  }

  if (article?.status === 'not-found') {
    return <Error404 />;
  }

  const deletePost = async () => {
    await axios.delete('/api/manage/post', {
      data: {
        id: article.id
      }
    });
    push('/blog');
  };

  return (
    <Wrapper>
      {user && <DeleteElement onClick={deletePost}>
        <Image src='https://cdn.iconscout.com/icon/free/png-256/delete-trash-bin-dustbin-recycle-useless-30494.png'
               width={40} height={40} alt='Trash image' />
      </DeleteElement>}
      <article>
        <header>
          <StyledTitle data-category={article.category}>{article.title}</StyledTitle>
        </header>
        <section>
          <Content id='article'>
            <ReactMarkdown>
              {article.content}
            </ReactMarkdown>
          </Content>
        </section>
        {article.sources && <section><Sources data={article.sources} /></section>}
      </article>
      <aside>
        <ShareIcons />
      </aside>
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
      id: article.friendly?.toString() || 'not-found'
    }
  }));

  return {
    paths,
    fallback: true
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );

  // eslint-disable-next-line
  const article = articles.data.records.find((article: any) => article.friendly === params?.id);
  if (!article) return { props: { article: { status: 'not-found' } } };

  return {
    props: {
      article
    }
  };
};

export default BlogID;
