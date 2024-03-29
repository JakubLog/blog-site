import React, { useEffect, useState } from 'react';
import { ErrorParagraph, ErrorTitle, RedirectingInfo, Wrapper } from '../styles/Error404.styles';
import { useRouter } from 'next/router';
import { ExtendedNextPage } from '../types/NextPage';

const Error404: ExtendedNextPage = () => {
  const [number, setNumber] = useState(5);
  const { asPath, replace } = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (number === 1) replace('/');
      setNumber(number - 1);
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [number]);

  return (
    <Wrapper>
      <ErrorTitle>Oooops! 404</ErrorTitle>
      <ErrorParagraph>
        There&apos;s no page <b>{asPath}</b>
      </ErrorParagraph>
      <RedirectingInfo>Redirecting to Homepage in {number}...</RedirectingInfo>
    </Wrapper>
  );
};
Error404.title = '404';

export default Error404;
