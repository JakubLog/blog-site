import React, { useEffect, useState } from 'react';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Wrapper } from './ShareIcons.styles';

const ShareIcons: React.FC = () => {
  const [siteName, setSiteName] = useState('https://fedoszczak.ovh/blog');

  useEffect(() => {
    setSiteName(window.location.href);
  }, []);

  return (
    <Wrapper>
      <p>No udostępnij no... 😢</p>
      <FacebookShareButton url={siteName}>
        <FacebookIcon round size={40} />
      </FacebookShareButton>
      <TwitterShareButton url={siteName}>
        <TwitterIcon round size={40} />
      </TwitterShareButton>
      <LinkedinShareButton url={siteName}>
        <LinkedinIcon round size={40} />
      </LinkedinShareButton>
    </Wrapper>
  );
};

export default ShareIcons;
