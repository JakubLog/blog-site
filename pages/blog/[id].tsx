/* eslint-disable prettier/prettier */
import axios from 'axios';
import { addHeaderIds, addHeaderTab, getHeaders, updateURL } from 'helpers/article';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Content, StyledTitle, Wrapper } from 'styles/Article.styles';
import Sources from '../../components/organisms/Sources/Sources';

interface props {
  article: {
    id: string;
    title: string;
    content: string;
    category: string;
    sources?: {
      name: string;
      url: string;
    }[];
  };
}

const BlogID: NextPage<props> = ({ article: { title, content, category, sources } }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const observer = useRef<any>(null);
  useEffect(() => {
    document.title = `Jakub Michał Fedoszczak | ${title}`;
  }, [title]);
  useEffect(() => {
    addHeaderIds();
    addHeaderTab();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateURL(entry.target.id);
          }
        });
      },
      { threshold: 1, root: document }
    );

    setTimeout(() => {
      getHeaders().forEach((header: Element) => {
        observer.current.observe(header);
      });
    }, 2000);

    return () => {
      observer.current.disconnect();
    };
  }, []);

  content = `# Tytul numer 1
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  doloremque. Quaerat provident commodi consectetur veniam similique ad 
  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  quasi aliquam eligendi, placeat qui corporis!
  ## Tytul numer 2
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  doloremque. Quaerat provident commodi consectetur veniam similique ad 
  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  quasi aliquam eligendi, placeat qui corporis!
  ### Tytul numer 3
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  doloremque. Quaerat provident commodi consectetur veniam similique ad 
  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  quasi aliquam eligendi, placeat qui corporis!
  #### Tytul numer 4
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
  consequuntur! Commodi minima excepturi repudiandae velit hic maxime
  doloremque. Quaerat provident commodi consectetur veniam similique ad 
  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
  modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
  quasi aliquam eligendi, placeat qui corporis!`;

  return (
    <Wrapper>
      <StyledTitle data-category={category}>{title}</StyledTitle>
      <Content id='article'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Content>
      {sources && <Sources data={sources} />}
    </Wrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticles = await axios.post(
    'https://api.m3o.com/v1/db/Read',
    { table: 'articles' },
    { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
  );
  const paths = allArticles.data.records.map((article: props['article']) => {
    return {
      params: {
        id: article.id.toString()
      }
    };
  });

  return {
    paths,
    fallback: true
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const article = await axios.post(
      'https://api.m3o.com/v1/db/Read',
      { table: 'articles', id: params.id },
      { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
    );
    return {
      props: {
        article: article.data.records[0]
      }
    };
  }
  return {
    props: {
      article: []
    }
  };
};

export default BlogID;
