import { instance } from '../../common/api-instance/instance';

export const postsAPI = {
  getPosts(params: PostsParamType) {
    return instance.get('posts', { params });
  },
};

type PostsParamType = {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
};

export type ItemPostType = {
  blogId: string;
  blogName: string;
  content: string;
  createdAt: string;
  id: string;
  shortDescription: string;
  title: string;
};

export type PostType = {
  items: ItemPostType[];
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
};
