import React from 'react'
import { useState, useEffect } from "react";
import {getAllComments, getOneComment, postComment, putComment, deleteComment } from '../../services/comments'
import { useParams, Link } from 'react-router-dom';


export default function PostDetail(props) {
  
  const { posts } = props;

  const { id } = useParams()
  const post = posts?.filter(post => {
    //return post.id === id
    return post.id === Number(id)
  })[0]
 
  //console.log(id)
   const comments = post?.comments
    // const currComment = comments?.filter(comment => {
    //   return comment.id === id
    // })
  console.log(comments)

  return (
    <div>
      <h3>posts w/ comments</h3>
      {comments?.map(comment => {
        return (
          <Link to={`/${post.id}/comment/${comment.id}`}>
            {comment.content}
          </Link>
        )
      })}
    </div>
  )
}
