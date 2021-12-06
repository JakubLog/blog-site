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

interface postData {
  title: string;
  content: string;
  category: string;
  sources: string;
}

const Dashboard: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const handlePost = ({ title, category, content, sources }: postData) => {
    const preparedSources = JSON.parse(sources);
    // Rest logic of adding post
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
