import { NextPage } from 'next';

export type ExtendedNextPage<T = {}> = NextPage<T> & {
  title?: string;
};