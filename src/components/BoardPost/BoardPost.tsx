import React from "react";
import { useSession } from "next-auth/react";
import Card from "@/components/common/Card";
import CommentForm from "@/components/Comment/CommentForm";
import SingleComment from "@/components/Comment/SingleComment";
import { IResponseBoard } from "@/interfaces/study_board";
import style from "./boardPost.module.css";
import LikeButton from "./like_button/LikeButton";
import ExpansionButton from "./expansion_button/ExpansionButton";
import { deleteStudyPostComment, loadStudyPostComment, postStudyPostComment } from "@/axios/fetcher/studyPostComment";

interface Iprops {
  studyId: string;
  board: IResponseBoard;
  onDelPost: (id: string) => void;
}

const BoardPost = ({ studyId, board, onDelPost }: Iprops) => {
  const { _id, content, user, createdAt } = board;

  return (
    <div className={style.board_post_wrap}>
      <div className={style.board_post_container}>
        <div className={style.post_wrap}>
          {
            <Card
              name={user?.name as string}
              imagePath={user?.image as string}
              createdAt={createdAt}
              actionEl={
                <div className={style.post_btn_wrap}>
                  <ExpansionButton onDelPost={onDelPost} _id={_id} />
                </div>
              }
              content={content}
            />
          }
        </div>
        <LikeButton _id={_id} />
      </div>
      <div className={style.comment_container}>
        <div>
          <CommentForm user={user} studyId={studyId} postId={_id} fetcher={postStudyPostComment} />
        </div>
        <div>
          <SingleComment
            isToggleCtrl
            postId={studyId}
            boardId={_id}
            loadFetcher={loadStudyPostComment}
            delFetcher={deleteStudyPostComment}
            updateFetcher={async () => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardPost;
