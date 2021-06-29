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
import { useParams, Link, } from "react-router-dom";
import './PostDetail.css'

const CommentBox = ({ userId, postId }) => {
  console.log("wtf ->", userId, " ", postId);
  const [content, setCommentValue] = useState("");

  return (
    <div>
      <textarea className='textarea'
         rows="20" name="comment[text]" id="comment_text" cols="40" rows='5' class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"
        onChange={(event) => setCommentValue(event.target.value)}
      ></textarea>
      <button className='submit-btn' onClick={(event) => addComment({ userId, postId, content })}>
        Submit
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
  

  return (
    <div className='comments'>
      
      {comments?.map((comment) => {
        return (
          
          <Link className='reply'to={`/${post.id}/comment/${comment.id}`}>
            {comment.content}
          </Link>
          
        );
        
      })}
      <button className='add-button' onClick={setShowCommentBox}>add comment</button>
      {showCommentBox && <CommentBox userId={post.user_id} postId={post.id} />}
    </div>
  );
}
