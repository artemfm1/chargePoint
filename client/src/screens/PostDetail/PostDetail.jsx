import React from "react";
import { useState, useEffect } from "react";
import {
  getAllComments,
  getOneComment,
  postComment,
  putComment,
  deleteComment,
} from "../../services/comments";
import { addComment } from "../../services/posts";
import { useParams, Link } from "react-router-dom";

const CommentBox = ({ userId, postId }) => {
  console.log("wtf ->", userId, " ", postId);
  const [content, setCommentValue] = useState("");

  return (
    <div>
      <textarea
        onChange={(event) => setCommentValue(event.target.value)}
      ></textarea>
      <button onClick={(event) => addComment({ userId, postId, content })}>
        Confirm
      </button>
    </div>
  );
};

export default function PostDetail(props) {
  console.log(props);
  const { posts } = props;
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { id } = useParams();
  const post = posts?.filter((post) => {
    //return post.id === id
    return post.id === Number(id);
  })[0];

  //console.log(id)
  const comments = post?.comments;
  // const currComment = comments?.filter(comment => {
  //   return comment.id === id
  // })
  console.log(comments);

  return (
    <div>
      <h3>posts w/ comments</h3>
      {comments?.map((comment) => {
        return (
          <Link to={`/${post.id}/comment/${comment.id}`}>
            {comment.content}
          </Link>
        );
      })}
      <button onClick={setShowCommentBox}>add comment</button>
      {showCommentBox && <CommentBox userId={post.user_id} postId={post.id} />}
    </div>
  );
}
