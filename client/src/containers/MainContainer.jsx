import React from 'react'
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import PostDetails from '../screens/PostDetails'
import EditComment from '../screens/EditComment'
import CommentDetail from '../screens/CommentDetail'

import Posts from '../screens/Posts'

// Services
import { getAllPosts, postPost, putPost, deletePost, addComment } from '../services/posts';
import { getAllComments, postComment, putComment, deleteComment } from '../services/comments';


  export default function MainContainer() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const history = useHistory();

    useEffect(() => {
      const fetchPosts = async () => {
        const postList = await getAllPosts();
        setPosts(postList);
      };
      fetchPosts();
    }, []);

    // useEffect(() => {
    //   const fetchComments = async () => {
    //     const commentList = await getAllComments();
    //     setComments(commentList);
    //   };
    //   fetchComments();
    // }, []);

    // const handleCreate = async (formData) => {
    //   const postItem = await postPost(formData);
    //   setPosts((prevState) => [...prevState, postItem]);
    //   history.push('/posts');
    // };

    const handleCreate = async (formData) => {
      const commentItem = await postComment(formData);
      setComments((prevState) => [...prevState, commentItem]);
      history.push('/posts');
    };

    // const handleUpdate = async (id, formData) => {
    //   const postItem = await putPost(id, formData);
    //   setPosts((prevState) =>
    //     prevState.map((post) => {
    //       return post.id === Number(id) ? postItem : post;
    //     })
    //   );
    //   history.push('/posts');
    // };

    const handleUpdate = async (id, formData) => {
      const commentItem = await putComment(id, formData);
      setComments((prevState) =>
        prevState.map((comment) => {
          return  comment.id === Number(id) ? commentItem : comment;
        })
      );
      history.push('/posts/:id');
    };

    // const handleDelete = async (id) => {
    //   await deletePost(id);
    //   setPosts((prevState) => prevState.filter((post) => post.id !== id));
    // };

    const handleDelete = async (id) => {
      await deleteComment(id);
      setComments((prevState) => prevState.filter((comment) => comment.id !== id));
    };


  return (
    <div>
      <Switch>
      
      <Route path='/posts/:id'>
          <PostDetails posts={posts} comments={comments}
            handleCreate={handleCreate }/>
        </Route>
        <Route path='/posts'>
					<Posts posts={posts} />
				</Route>
      {/* <Route path='/comments/:id'>
          <CommentDetail comments={comments}
            handleDelete={handleDelete}
            handleUpdate={ handleUpdate}/>
				</Route>
      <Route path='/comments/:id/edit'> 
					{/* <EditComment comments={comments} /> 
				{/* </Route> */}
      </Switch>
    
    </div>
  )
}
