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
  const allArticles = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return {
    props: { allArticles: allArticles.data }
  };
};

export default Blog;
