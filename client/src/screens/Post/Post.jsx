import React from 'react'
import { useState, useEffect } from "react";
import Layout from "../../layouts/Layout"
import { useParams, Link } from "react-router-dom";
import getOnePost from '../../services/posts'
import './Post.css'

export default function Post(props) {
  const [postItem, setPostItem] = useState(null);
	const [commentId, setCommentId] = useState('');
	const { post, comments } = props;
  const { id } = useParams();

  useEffect(() => {
    
    if (post) {
      setPostItem(post)
    }
  }, [])

  


	return (
    <div className='post'>
      <Link to={`/post-detail/${post.id}`}>
        <h3>{post?.description}</h3>
        
        <h3>{post?.location}</h3>

        <h1>{post.comments.length}  💬  </h1>
      </Link>
		
      

		</div>
	);
}
