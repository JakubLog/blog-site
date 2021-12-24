import React, { useState } from 'react';
import { Header } from '../../atoms/Header/Header';
import { PostRecord, TableOfPosts } from '../../../styles/Admin.styles';
import { useRouter } from 'next/router';
import axios from 'axios';
import { article } from '../../../types/article';
import Button from '../../atoms/Button/Button';

const PostManager: React.FC = () => {
  const { push, reload } = useRouter();
  const [articles, setArticles] = useState<article[]>([]);
  const [isLoading, setLoadingState] = useState(false);

  const getArticles = async () => {
    setLoadingState(true);
    const {
      data: { records: articles }
    } = await axios.get('/api/manage/post');
    setArticles(articles.reverse());
    setLoadingState(false);
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
    await getArticles();
  };

  return (
    <>
      <Header>Zarządzaj postami</Header>
      <TableOfPosts>
        <div style={{ margin: '20px auto', width: 'fit-content' }}>
          {articles.length === 0 && <Button onClick={getArticles}>{!isLoading ? 'Załaduj' : 'Pobieranie danych...'}</Button>}
        </div>
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
    </>
  );
};

export default PostManager;
