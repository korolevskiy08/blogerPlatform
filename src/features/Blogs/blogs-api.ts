import { instance } from '../../common/api-instance/instance';

export const blogsAPI = {
  getBlogs(params: BlogsParamType) {
    return instance.get('blogs', { params });
  },
  removeBlog(id: string) {
    return instance.delete(`blogs/${id}`);
  },
};

type BlogsParamType = {
  searchNameTerm?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
};

export type BlogType = {
  createdAt: string;
  id: string;
  name: string;
  websiteUrl: string;
  description: string;
};

export type NewBlogType = {
  name: string;
  description: string;
  websiteUrl: string;
};
