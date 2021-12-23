import React from 'react';
import { Header } from '../../atoms/Header/Header';
import { PostRecord, TableOfPosts } from '../../../styles/Admin.styles';
import { useRouter } from 'next/router';
import axios from 'axios';
import { article } from '../../../pages/article';

interface props {
  articles: article[];
}

const PostManager: React.FC<props> = ({ articles }) => {
  const { push, reload } = useRouter();

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
    </>
  );
};

export default PostManager;