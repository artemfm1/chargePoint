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
  
console.log(post.comments.length)
  useEffect(() => {
    //console.log(post)
    if (post) {
      setPostItem(post)
    }
  }, [])

	// useEffect(() => {
	// 	const fetchPostItem = async () => {
	// 		const postData = await getOnePost(id);
	// 		setPostItem(postData);
	// 	};
	// 	fetchPostItem();
	// }, [id]);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const postItem = await addComment(id, commentId);
	// 	setPostItem(postItem);
	// };
  //const comments = post.comments

  


	return (
    <div className='post'>
      <Link to={`/post-detail/${post.id}`}>
        <h3>{post?.description}</h3>
        
        <h3>{post?.location}</h3>

        <h1>{post.comments.length}  💬  </h1>
      </Link>
			{/* {post?.comments.map((comment) => (
				<p key={comment.id}>{comment.content}</p>
      ))} */}
      

		</div>
	);
}
