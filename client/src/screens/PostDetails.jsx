import React from 'react'
import { useState, useEffect } from "react";
import Layout from "../layouts/Layout"
import { useParams, Link } from "react-router-dom";
import getOnePost from '../services/posts'


export default function PostDetails(props) {
  const [postItem, setPostItem] = useState(null);
	const [commentId, setCommentId] = useState('');
	const { post } = props;
  const { id } = useParams();
  

  useEffect(() => {
    console.log(post)
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


  



	return (
		<div>
			<h3>{postItem?.name}</h3>
			{postItem?.comment.map((comment) => (
				<p key={comment.id}>{comment.name}</p>
      ))}
      

		</div>
	);
}
