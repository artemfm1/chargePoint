import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

const CommentDetail = (props) => {
  const { posts, handleDelete, comment } = props;
  

  const { id, post_id } = useParams()
  console.log(post_id)
  const post = posts?.filter(post => {
    return post.id == post_id
  })[0]
  const comments = post?.comments
  const currComment = comments?.filter(comment => {
    return comment.id == id
    
  })[0]
  

  console.log(currComment)
  return (
    <div>
      <h1>{currComment?.content}</h1>
    
  
      <Link to ={`/${post_id}/comments/${id}/edit`}>
      <button>Edit</button>
      </Link>
      
    <button onClick={() => handleDelete(id)}>Delete</button>

    </div>
  );
};

export default CommentDetail;