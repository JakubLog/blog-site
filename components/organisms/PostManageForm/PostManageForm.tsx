import React, { useState } from 'react';
import { Header } from '../../atoms/Header/Header';
import { Form } from '../../atoms/Form/Form';
import { Input } from '../../atoms/Input/Input';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';
import { Select } from '../../atoms/Select/Select';
import { TextArea } from '../../atoms/TextArea/TextArea';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import base from 'providers/airtable';
import Link from 'next/link';
import SmallLoading from '../../atoms/SmallLoading/SmallLoading';

interface postData {
  title: string;
  content: string;
  category: string;
  sources: string;
  isPlanned: boolean;
  description: string;
}

const PostManageForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const [isPostCreated, setPostCreatedState] = useState<undefined | JSX.Element>(undefined);
  const [isCreating, setCreatingState] = useState(false);

  const handlePost = async ({ title, category, description, content, sources, isPlanned }: postData) => {
    setCreatingState(true);
    try {
      if (!isPlanned) {
        const {
          data: { newPost }
        } = await axios.post('/api/manage/post', {
          title,
          category,
          description,
          content,
          sources
        });
        setPostCreatedState(
          <p>
            Pomyślnie utworzono post.{' '}
            <u>
              <Link href={`/blog/${newPost.friendly}`}>Kliknij aby otworzyć</Link>
            </u>
            .
          </p>
        );
      } else {
        const cleanTitle = title.trim().replaceAll('!', '').replaceAll('?', '');
        const generatedUrl = cleanTitle.replace(/\s/g, '-').toLowerCase();

        await base.table('Table 1').create({
          Title: title,
          Category: category,
          Description: description,
          Content: content,
          'Friendly-url': generatedUrl,
          'Published?': 'Not yet'
        });
        setPostCreatedState(<p>Zaplanowano!</p>);
      }
      setCreatingState(false);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header>
        <h1>Dodaj nowy post</h1>
        {isCreating && <SmallLoading />}
      </Header>
      <Form onSubmit={handleSubmit(handlePost)}>
        <Input placeholder="Title" {...register('title', { required: true })} />
        {errors.title && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
        <Input placeholder="Description" {...register('description', { required: true })} />
        {errors.description && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
        <Select {...register('category', { required: true })}>
          <option value="Brak kategorii">Select Category</option>
          <option value="Programowanie">Programowanie</option>
          <option value="Bezpieczeństwo w sieci">Bezpieczeńśtwo w sieci</option>
          <option value="Poglądowe">Poglądowe</option>
        </Select>
        {errors.category && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
        <TextArea {...register('content', { required: true })}># Lorem ipsum</TextArea>
        {errors.content && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
        <Input placeholder='[ {"name": "lorem", "url": "https://google.com" } ]' {...register('sources', { required: false })} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontWeight: 'bold', opacity: '0.8' }} htmlFor="planing">
            Zaplanuj post
          </label>
          <input style={{ marginLeft: '5px' }} id="planing" type="checkbox" {...register('isPlanned', { required: false })} />
        </div>
        <div style={{ display: 'flex' }}>
          <Button>{!isCreating ? 'Dodaj post' : 'Tworzenie...'}</Button>
          {isPostCreated && <div style={{ paddingLeft: 15, alignItems: 'center', fontWeight: 'bold', opacity: '0.4' }}>{isPostCreated}</div>}
        </div>
      </Form>
    </>
  );
};

export default PostManageForm;
