import React from 'react';
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
import { Wrapper } from 'styles/Admin.styles';
import axios from 'axios';
import { format } from 'date-fns';

interface postData {
  title: string;
  content: string;
  category: string;
  sources: string;
  description: string;
}

const Dashboard: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const handlePost = async ({ title, category, description, content, sources }: postData) => {
    const preparedSources = sources ? JSON.parse(sources) : null;
    const dateNow = format(new Date(), 'dd.MM.yyyy');
    try {
      await axios.post('/api/manage/post', {
        title,
        category,
        description,
        content,
        date: dateNow,
        sources: preparedSources
      });
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
        <Form onSubmit={handleSubmit(handlePost)}>
          <Input placeholder="Title" {...register('title', { required: true })} />
          {errors.title && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <Input placeholder="Description" {...register('description', { required: true })} />
          {errors.description && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <Select {...register('category', { required: true })}>
            <option value="Brak kategorii" selected>
              Select Category
            </option>
            <option value="Programowanie">Programowanie</option>
            <option value="Bezpieczeństwo w sieci">Bezpieczeńśtwo w sieci</option>
            <option value="Poglądowe">Podglądowe</option>
          </Select>
          {errors.category && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <TextArea {...register('content', { required: true })}># Lorem ipsum</TextArea>
          {errors.content && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          <Input placeholder='[ {"name": "lorem", "url": "https://google.com" } ]' {...register('sources', { required: false })} />
          <Button>Dodaj post</Button>
        </Form>
      </Wrapper>
    </>
  );
};

Dashboard.title = 'Admin';

export default withPageAuthRequired(Dashboard, {
  onRedirecting: () => <Loading />
});
