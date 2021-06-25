import React from 'react'
import PostDetails from './PostDetails'
import { useEffect } from 'react';

export default function Posts(props) {
  const { posts } = props;

  return (
    <div>
      <h3>posts</h3>
      {posts.map(post => (
        <PostDetails post={post}/>
        
      ))}
    </div>
  )
}
