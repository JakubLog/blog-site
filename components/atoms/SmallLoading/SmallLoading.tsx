import React from 'react';
import { Dot } from './SmallLoading.styles';
import { loadingVariant } from 'variants/loading';

const SmallLoading = () => {
  return <Dot variants={loadingVariant} animate="animationOne" />;
};

export default SmallLoading;
