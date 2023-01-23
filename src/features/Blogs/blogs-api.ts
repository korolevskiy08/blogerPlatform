import { instance } from '../../common/api-instance/instance';

import { PostsBlogType } from './blogsType';

export const blogsAPI = {
  getBlogs(params: BlogsParamType) {
    return instance.get<BlogType>('blogs', { params });
  },
  getBlogPosts(blogId: string) {
    return instance.get<PostsBlogType>(`blogs/${blogId}/posts`);
  },
};

export type BlogsParamType = {
  searchNameTerm?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
};

export type BlogItemType = {
  createdAt: string;
  id: string;
  name: string;
  websiteUrl: string;
  description: string;
};

export type BlogType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: BlogItemType[];
};
