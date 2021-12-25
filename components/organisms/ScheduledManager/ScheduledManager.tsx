import React, { useState } from 'react';
import { Header } from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import { PostRecord, TableOfPosts } from '../../../styles/Admin.styles';
import base from '../../../providers/airtable';
import { article } from '../../../types/article';
import SmallLoading from '../../atoms/SmallLoading/SmallLoading';

const ScheduledManager = () => {
  const [isLoading, setLoadingState] = useState(false);
  const [status, setStatus] = useState<null | string>(null);
  const [scheduledPosts, setScheduledPosts] = useState<article[]>([]);

  const getScheduled = () => {
    setStatus(null);
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
          setStatus(tempArr.length > 0 ? `Znaleziono ${tempArr.length} zaplanowanych wpisów.` : 'Nie znaleziono żadnych zaplanowanych wpisów.');
          setLoadingState(false);
        },
        (err) => {
          console.error(err);
          setStatus('Wystąpił jakiś problem...');
        }
      );
  };

  const deleteScheduled = async (postId: string) => {
    await base.table('Table 1').destroy(postId);
    getScheduled();
  };

  return (
    <>
      <Header>
        <h1>Zaplanowane publikacje</h1>
        {isLoading && <SmallLoading />}
      </Header>
      <div
        style={{
          margin: '20px auto',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
          flexDirection: 'column'
        }}
      >
        {scheduledPosts.length === 0 && !isLoading && <Button onClick={getScheduled}>Załaduj</Button>}
        {isLoading && <p>Pobieranie danych...</p>}
        {status && <p>{status}</p>}
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
