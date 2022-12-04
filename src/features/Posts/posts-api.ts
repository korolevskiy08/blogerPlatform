import { instance } from '../../common/api-instance/instance';

export const postsAPI = {
  getPosts() {
    return instance.get<PostType>('posts');
  },
  removePost(id: string) {
    return instance.delete(`posts/${id}`);
  },
  addPost(data: AddPostType) {
    return instance.post<AddPostResponseType>('posts', data);
  },
  editPost({ data, id }: EditPostType) {
    return instance.put(`posts/${id}`, data);
  },
};

export type EditPostType = {
  data: AddPostType;
  id: string;
};

export type AddPostResponseType = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
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

export type AddPostType = {
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
};
