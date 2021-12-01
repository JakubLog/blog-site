import React from 'react';
import { useRouter } from 'next/router';
import { Date, Description, StyledTitle, Wrapper } from './ArticleSnippet.styles';

interface props {
  data: {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
  };
  isNew: boolean;
}

const ArticleSnippet: React.FC<props> = ({ data: { title, description, category, id, date }, isNew }) => {
  const { push } = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePostClick = (e: any) => {
    if (e.key !== 'Tab') {
      push(`/blog/${id}`);
    }
  };

  return (
    <Wrapper isNew={isNew} className={'appear-animation'} onKeyDown={handlePostClick} onClick={handlePostClick} tabIndex={1}>
      <StyledTitle data-category={`~ ${category}`}>{title}</StyledTitle>
      <Description>{description}</Description>
      <Date>{date}</Date>
    </Wrapper>
  );
};

export default ArticleSnippet;
