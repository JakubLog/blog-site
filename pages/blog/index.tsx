import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

interface props {
  allArticles: any;
}

const Blog: NextPage<props> = ({ allArticles }) => {
  return (
    <div>
      <ul>
        {allArticles.map((article: any) => (
          <Link href={`/blog/${article.id}`}>
            <p>Article numero {article.id}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};
Blog.title = 'Blog';

export const getServerSideProps = async () => {
  const allArticles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );

  return {
    props: { allArticles: allArticles.data.records }
  };
};

export default Blog;
