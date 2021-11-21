import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: clamp(22px, 2vw, 28px);
    font-weight: bold;
    margin-top: 10px;
    opacity: 0.7;
    letter-spacing: 2px;
  }
`;

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <div className="middle">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
        <div className="bar bar6"></div>
        <div className="bar bar7"></div>
        <div className="bar bar8"></div>
      </div>
      <p>Loading...</p>
    </Wrapper>
  );
};

export default Loading;
