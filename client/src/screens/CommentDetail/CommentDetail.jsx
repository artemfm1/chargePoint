import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './CommentDetail.css'

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
    
  })[0];
  
  <Redirect to={`/post-detail/${id}`}/>
  
  return (
    <div>
      <h1>{currComment?.content}</h1>
    
  
      <Link to ={`/${post_id}/comments/${id}/edit`}>
      <button className='btn'>Edit</button>
      </Link>
      
    <button className='btn'onClick={() => handleDelete(id)}>Delete</button>
    
    </div>
  );
};

export default CommentDetail;