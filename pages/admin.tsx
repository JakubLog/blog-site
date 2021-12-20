import React, { useState } from 'react';
import Head from 'next/head';
import Loading from '../components/atoms/Loading/Loading';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import Button from '../components/atoms/Button/Button';
import { Select } from '../components/atoms/Select/Select';
import { Form } from '../components/atoms/Form/Form';
import { Input } from '../components/atoms/Input/Input';
import { TextArea } from '../components/atoms/TextArea/TextArea';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import { PostRecord, TableOfPosts, Wrapper } from 'styles/Admin.styles';
import axios from 'axios';
import { format } from 'date-fns';
import { Header } from 'components/atoms/Header/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface postData {
  title: string;
  content: string;
  category: string;
  sources: string;
  description: string;
}

interface props {
  articles: {
    title: string;
    id: string;
    content: string;
    category: string;
    friendly: string;
    sources: {
      name: string;
      url: string;
    }[];
  }[];
}

const Dashboard: NextPage<props> = ({ articles }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const { push, reload } = useRouter();
  const [isCreated, setCreatedState] = useState<undefined | string>(undefined);

  const handlePost = async ({ title, category, description, content, sources }: postData) => {
    const preparedSources = sources ? JSON.parse(sources) : null;
    const dateNow = format(new Date(), 'dd.MM.yyyy');
    try {
      const {
        data: { newPost }
      } = await axios.post('/api/manage/post', {
        title,
        category,
        description,
        content,
        date: dateNow,
        sources: preparedSources
      });
      setCreatedState(newPost.friendly);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete('/api/manage/post', {
        data: {
          id
        }
      });
      reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper>
        <Header>Dodaj nowy post</Header>
        <Form onSubmit={handleSubmit(handlePost)}>
          <Input placeholder="Title" {...register('title', { required: true })} />
          {errors.title && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <Input placeholder="Description" {...register('description', { required: true })} />
          {errors.description && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <Select {...register('category', { required: true })}>
            <option value="Brak kategorii">Select Category</option>
            <option value="Programowanie">Programowanie</option>
            <option value="Bezpieczeństwo w sieci">Bezpieczeńśtwo w sieci</option>
            <option value="Poglądowe">Podglądowe</option>
          </Select>
          {errors.category && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <TextArea {...register('content', { required: true })}># Lorem ipsum</TextArea>
          {errors.content && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <Input placeholder='[ {"name": "lorem", "url": "https://google.com" } ]' {...register('sources', { required: false })} />
          <div style={{ display: 'flex' }}>
            <Button>Dodaj post</Button>
            {isCreated && (
              <p style={{ paddingLeft: 15, alignItems: 'center' }}>
                Pomyślnie utworzono post.{' '}
                <u>
                  <Link href={`/blog/${isCreated}`}>Kliknij aby otworzyć</Link>
                </u>
                .
              </p>
            )}
          </div>
        </Form>
        <Header>Zarządzaj postami</Header>
        <TableOfPosts>
          {articles.map((article) => (
            <PostRecord
              key={article.id}
              danger={
                !article.friendly ||
                !article.title ||
                !article.content ||
                !article.category ||
                (!Array.isArray(article.sources) && article.sources !== null)
              }
            >
              <h3 onClick={() => push(`/blog/${article.friendly}`)}>{article.title}</h3>
              <p>{article.id}</p>
              <button onClick={() => handleDelete(article.id)}>X</button>
            </PostRecord>
          ))}
        </TableOfPosts>
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
