import { instance } from '../../common/api-instance/instance';

import { DataNewComment, UpdateCommentType } from './postType';

export const postAPI = {
  getPost(id: string) {
    return instance.get(`posts/${id}`);
  },
  getComments(postId: string) {
    return instance.get(`posts/${postId}/comments`);
  },
  newComment(data: DataNewComment) {
    return instance.post(
      `posts/${data.postId}/comments`,
      { content: data.content },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  },
  deleteComment(commentsId: string) {
    return instance.delete(`comments/${commentsId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },
  updateComment({ commentId, content }: UpdateCommentType) {
    return instance.put(
      `comments/${commentId}`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  },
};
