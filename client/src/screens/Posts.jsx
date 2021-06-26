import React from 'react'
import PostDetails from './PostDetails'
import { useEffect } from 'react';

export default function Posts(props) {
  const { posts } = props;

  return (
    <div>
  
    
      {posts.map(post => (
        <PostDetails key={post.id.count} post={post}/>
        
      ))}
    </div>
  )
}
