import { SortByType, SortDirectionType } from './blogs-slice';

export type PostItem = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
};

export type PostsBlogType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: PostItem[];
};

export type paramsPostType = {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortByType;
  sortDirection?: SortDirectionType;
};
