import { instance } from '../../common/api-instance/instance';

export const blogsAPI = {
  getBlogs() {
    return instance.get('blogs');
  },
};

export type BlogType = {
  createdAt: string;
  id: string;
  name: string;
  youtubeUrl: string;
};
