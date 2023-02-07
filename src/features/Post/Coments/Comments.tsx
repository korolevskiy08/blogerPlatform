import React, { FC, useEffect, useState } from 'react';

import { DeleteModal } from '../../../common/Components/Modals/DeleteModal/DeleteModal';
import { Settings } from '../../../common/Components/Settings/Settings';
import { useActions } from '../../../common/hooks/useActions';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { postActions } from '../index';
import { LikeStatusType } from '../postType';

import { AddComments } from './AddComments/AddComments';
import { CommentsItem } from './CommentsItem/CommentsItem';

type CommentsType = {
  postId: string;
};

export const Comments: FC<CommentsType> = ({ postId }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const comments = useAppSelector(state => state.post.comments);
  const login = useAppSelector(state => state.auth.user);
  const [textComment, setTextComment] = useState('');
  const currentUser = useAppSelector(state => state.auth.user?.login);
  const { newComment, getPostComments, deletePostComment, editComment, likeStatus } =
    useActions(postActions);

  useEffect(() => {
    getPostComments(postId);
  }, []);

  const changeComment = (text: string): void => {
    setTextComment(text);
  };

  const sendComment = (): void => {
    if (postId) {
      newComment({ content: textComment, postId });
      setTextComment('');
    }
  };

  const removeComment = (id: string): void => {
    deletePostComment({ commentId: id });
  };

  const editCommentContent = (id: string, commentText: string): void => {
    if (postId) {
      editComment({ commentId: id, content: commentText, postId });
      setEditMode(false);
    }
  };

  const like = (status: LikeStatusType, id: string): void => {
    likeStatus({ commentId: id, likeStatus: status });
    if (postId) {
      getPostComments(postId);
    }
  };

  const disLike = (status: LikeStatusType, id: string): void => {
    likeStatus({ commentId: id, likeStatus: status });
    if (postId) {
      getPostComments(postId);
    }
  };

  return (
    <div>
      {login && (
        <AddComments
          sendComment={sendComment}
          changeComment={changeComment}
          textComment={textComment}
          cancel={() => {}}
        />
      )}
      {comments.map(c => {
        return (
          <>
            <CommentsItem
              key={c.id}
              userLogin="c.commentatorInfo.userLogin"
              createdAt={c.createdAt}
              content={c.content}
              id={c.id}
              currentDislike={c.likesInfo.dislikesCount}
              currentLike={c.likesInfo.likesCount}
              likeInfo={c.likesInfo.myStatus}
              editCommentContent={editCommentContent}
              editMode={editMode}
              closedEditComment={() => setEditMode(false)}
              like={like}
              dislike={disLike}
            />
            <DeleteModal
              isOpen={openDeleteModal}
              onClose={() => setOpenDeleteModal(false)}
              deleteItem={() => removeComment(c.id)}
              textModals="Are you sure you want to delete comment?"
              title="Delete Comment"
            />
            {currentUser === 'userLogin' ? (
              <Settings
                navigateEditMode={() => setEditMode(true)}
                openDeleteModal={() => setOpenDeleteModal(true)}
              />
            ) : null}
          </>
        );
      })}
    </div>
  );
};
