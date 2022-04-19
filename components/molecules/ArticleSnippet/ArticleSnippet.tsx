import React from 'react';
import { useRouter } from 'next/router';
import { Date, Description, StyledTitle, Wrapper } from './ArticleSnippet.styles';
import { snippetVariant } from '../../../variants/Snippets';

interface props {
  data: {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    ['friendly-url']: string;
  };
  isNew: boolean;
}

const ArticleSnippet: React.FC<props> = ({ data: { title, description, category, date, ...rest }, isNew }) => {
  const { push } = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePostClick = (e: any) => {
    if (e.key !== 'Tab') {
      push(`/blog/${rest['friendly-url']}`);
    }
  };

  return (
    <Wrapper
      variants={snippetVariant}
      initial='initial'
      animate='animate'
      whileHover='hover'
      isNew={isNew}
      onKeyDown={handlePostClick}
      onClick={handlePostClick}
      tabIndex={1}
    >
      <StyledTitle data-category={`~ ${category}`}>{title}</StyledTitle>
      <Description>{description}</Description>
      <Date>{date}</Date>
    </Wrapper>
  );
};

export default ArticleSnippet;
