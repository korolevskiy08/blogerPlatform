import { instance } from '../../common/api-instance/instance';

export const postAPI = {
  getPost(id: string) {
    return instance.get(`posts/${id}`);
  },
  comments(id: string) {
    return instance.get(`posts/${id}/comments`);
  },
};
