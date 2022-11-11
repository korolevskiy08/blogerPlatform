import { instance } from '../../common/api-instance/instance';

export const blogAPI = {
  getBlog(id: string) {
    return instance.get(`blogs/${id}`);
  },
};
