import { ItemPostType } from '../Posts/posts-api';

export type CommentsItemType = {
  items: CommentType[];
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
};

export type CommentType = {
  id: string;
  content: string;
  userId: string;
  userLogin: string;
  createdAt: string;
};

export type PostType = {
  items: ItemPostType[];
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
};

export type DataNewComment = {
  postId: string;
  content: string;
};

export type UpdateCommentType = {
  commentId: string;
  content: string;
};

export type ResponseLikeStatusType = {
  likeStatus: 'Like' | 'Dislike' | 'None';
  commentId: string;
};

export type LikeStatusType = 'Like' | 'Dislike' | 'None';

// comments

export type ItemCommentType = {
  id: string;
  content: string;
  createdAt: string;
  commentatorInfo: {
    userId: string;
    userLogin: string;
  };
  likesInfo: {
    likesCount: number;
    dislikesCount: number;
    myStatus: string;
  };
};

export type CommentsType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: ItemCommentType[];
};
