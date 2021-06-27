import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const CommentDetail = (props) => {
  const { posts } = props;

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
    
  
      <Link to >
        <div>
         
          </div>
      </Link>
      
    
 
    </div>
  );
};

export default CommentDetail;