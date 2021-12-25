import { NextPage } from 'next';

export type ExtendedNextPage = NextPage & {
  title?: string;
};