import React from 'react';
import { StyledTitle, Wrapper } from './Section.styles';

interface props {
  title: string;
}

const Section: React.FC<props> = ({ title, children }) => {
  return (
    <section aria-label={title} role="contentinfo">
      <Wrapper>
        <header>
          <StyledTitle>{title}</StyledTitle>
        </header>
        <div>{children}</div>
      </Wrapper>
    </section>
  );
};

export default Section;
