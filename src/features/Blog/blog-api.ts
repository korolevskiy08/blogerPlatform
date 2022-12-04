import { instance } from '../../common/api-instance/instance';
import { NewBlogType } from '../Blogs/blogs-api';

export const blogAPI = {
  getBlog(id: string) {
    return instance.get(`blogs/${id}`);
  },
  editBlog({ data, id }: EditBlogType) {
    return instance.put<NewBlogType>(`blogs/${id}`, data);
  },
};

export type EditBlogType = {
  data: NewBlogType;
  id: string;
};
