import { instance } from '../../common/api-instance/instance';
import { PostsBlogType } from '../Blogs/blogType';

export const blogAPI = {
  getBlog(id: string) {
    return instance.get(`blogs/${id}`);
  },
  getPostsBlog(blogId: string) {
    return instance.get<PostsBlogType>(`blogs/${blogId}/posts`);
  },
};
