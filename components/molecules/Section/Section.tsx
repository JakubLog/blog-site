import React from 'react';
import { StyledTitle, Wrapper } from './Section.styles';

interface props {
  title: string;
}

const Section: React.FC<props> = ({ title, children }) => {
  return (
    <section tabIndex={1}>
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
