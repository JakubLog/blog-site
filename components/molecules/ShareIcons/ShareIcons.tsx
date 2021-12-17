import React from 'react';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Wrapper } from './ShareIcons.styles';

const ShareIcons: React.FC = () => {
  return (
    <Wrapper>
      <p>No udostępnij no... 😢</p>
      <FacebookShareButton url={location.href}>
        <FacebookIcon round size={40} />
      </FacebookShareButton>
      <TwitterShareButton url={location.href}>
        <TwitterIcon round size={40} />
      </TwitterShareButton>
      <LinkedinShareButton url={location.href}>
        <LinkedinIcon round size={40} />
      </LinkedinShareButton>
    </Wrapper>
  );
};

export default ShareIcons;