import React, { useState } from 'react';
import { Header } from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import { PostRecord, TableOfPosts } from '../../../styles/Admin.styles';
import base from '../../../providers/airtable';
import { article } from '../../../types/article';

const ScheduledManager = () => {
  const [isLoading, setLoadingState] = useState(false);
  const [scheduledPosts, setScheduledPosts] = useState<article[]>([]);

  const getScheduled = () => {
    setLoadingState(true);
    base('Table 1')
      .select({
        maxRecords: 3,
        view: 'Grid view',
        filterByFormula: '{Published?} = "Not yet"'
      })
      .eachPage(
        (records) => {
          setLoadingState(true);
          const tempArr: article[] = [];
          records.forEach((record) =>
            tempArr.push({
              id: record.id,
              title: record.get('Title') as string,
              category: record.get('Category') as string
            })
          );
          setScheduledPosts(tempArr);
          setLoadingState(false);
        },
        (err) => {
          console.error(err);
        }
      );
  };

  const deleteScheduled = async (postId: string) => {
    await base.table('Table 1').destroy(postId);
    getScheduled();
  };

  return (
    <>
      <Header>Zaplanowane publikacje</Header>
      <div style={{ margin: '20px auto', width: 'fit-content' }}>
        {scheduledPosts.length === 0 && <Button onClick={getScheduled}>{!isLoading ? 'Załaduj' : 'Pobieranie danych...'}</Button>}
      </div>
      <TableOfPosts>
        {scheduledPosts.map((post: article) => (
          <PostRecord key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.category}</p>
            <button onClick={() => deleteScheduled(post.id)}>X</button>
          </PostRecord>
        ))}
      </TableOfPosts>
    </>
  );
};

export default ScheduledManager;
