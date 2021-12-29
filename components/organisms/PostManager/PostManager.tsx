import React, { useState } from 'react';
import { Header } from '../../atoms/Header/Header';
import { PostRecord, TableOfPosts } from '../../../styles/Admin.styles';
import { useRouter } from 'next/router';
import axios from 'axios';
import { article } from '../../../types/article';
import Button from '../../atoms/Button/Button';
import SmallLoading from '../../atoms/SmallLoading/SmallLoading';

const PostManager: React.FC = () => {
  const { push } = useRouter();
  const [articles, setArticles] = useState<article[]>([]);
  const [isLoading, setLoadingState] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const getArticles = async () => {
    setStatus(null);
    setLoadingState(true);
    const {
      data: { records: articles }
    } = await axios.get('/api/manage/post');
    setArticles(articles.reverse());
    setStatus(articles.length > 0 ? `Znaleziono ${articles.length} wpisy.` : 'Nie znaleziono wpisów.');
    setLoadingState(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete('/api/manage/post', {
        data: {
          id
        }
      });
    } catch (err) {
      console.error(err);
    }
    await getArticles();
  };

  return (
    <>
      <Header>
        <h1>Zarządzaj postami</h1>
        {isLoading && <SmallLoading />}
      </Header>
      <TableOfPosts>
        <div style={{ margin: '20px auto', width: 'fit-content' }}>
          {articles.length === 0 && !isLoading && <Button onClick={getArticles}>Załaduj</Button>}
          {isLoading && <p>Pobieranie danych...</p>}
          {status && <p>{status}</p>}
        </div>
        {articles.map((article) => (
          <PostRecord
            key={article.id}
            danger={
              !article.friendly ||
              !article.title ||
              !article.content ||
              (!Array.isArray(article.sources) && article.sources !== null && article.sources !== undefined)
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
