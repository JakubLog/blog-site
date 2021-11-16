import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { ErrorParagraph, ErrorTitle, RedirectingInfo, Wrapper } from '../styles/Error404.styles';
import { useRouter } from 'next/router';

const Error404: NextPage = () => {
  const [number, setNumber] = useState(5);
  const { asPath, replace } = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (number === 1) replace('/');
      setNumber(number - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [number]);

  return (
    <Wrapper>
      <ErrorTitle>Oooops! 404</ErrorTitle>
      <ErrorParagraph>
        There's no page <b>{asPath}</b>
      </ErrorParagraph>
      <RedirectingInfo>Redirecting to Homepage in {number}...</RedirectingInfo>
    </Wrapper>
  );
};

export default Error404;
