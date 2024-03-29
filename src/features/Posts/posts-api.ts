import { instance } from '../../common/api-instance/instance';

export const postsAPI = {
  getPosts(params: PostsParamType) {
    return instance.get<PostType>('posts', { params });
  },
};

export type PostsParamType = {
  pageNumber: number;
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
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: ItemPostType[];
};
