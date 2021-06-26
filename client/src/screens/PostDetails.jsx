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
      <Link to ='/comment-detail'>
        <h3>{post?.description}</h3>
        </Link>
      <h3>{post?.location}</h3>
     
			{/* {post?.comments.map((comment) => (
				<p key={comment.id}>{comment.content}</p>
      ))} */}
      

		</div>
	);
}
