import { ItemPostType } from '../Posts/posts-api';

export type commentsItemType = {
  items: commentType[];
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
};

export type commentType = {
  id: string;
  content: string;
  userId: string;
  userLogin: string;
  createdAt: string;
};

export type PostType = {
  items: ItemPostType[];
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
};
