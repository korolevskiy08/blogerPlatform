import { ItemPostType } from '../../Posts/posts-api';
import { postActions } from '../index';
import { postSlice, Status } from '../post-slice';
import { ItemCommentType } from '../postType';

const { deletePostComment, newPostComment } = postActions;

const postReducer = postSlice;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let startState: startStateType;

beforeEach(() => {
  startState = {
    status: 'idle' as Status,
    post: {
      content: 'content1',
      id: '1',
    } as ItemPostType,
    comments: [
      {
        id: '1',
        content: 'test1',
        createdAt: 'test1',
        commentatorInfo: {
          userId: '1',
          userLogin: 'login1',
        },
        likesInfo: {
          likesCount: 1,
          myStatus: 'like',
          dislikesCount: 1,
        },
      },
    ],
    error: null as null | string,
  };
});

test('comment must be removed', () => {
  const endState = postReducer(
    startState,
    // @ts-ignore
    deletePostComment.fulfilled({ commentId: '1' }),
  );

  expect(endState.comments.length).toBe(0);
});

test('comment must be added', () => {
  const endState = postReducer(
    startState,
    // @ts-ignore
    newPostComment.fulfilled({ postId: '1', content: 'content2' }),
  );

  const commentLength = 2;

  expect(endState.comments.length).toBe(commentLength);
});

type startStateType = {
  status: Status;
  post: ItemPostType;
  comments: ItemCommentType[];
  error: null | string;
};
