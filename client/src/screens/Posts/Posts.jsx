import React from 'react'
import Post from '../Post/Post'
import { useEffect } from 'react';

export default function Posts(props) {
  const { posts } = props;

  return (
    <div>
      
    
      {posts.map(post => (
        <Post key={post.id.count} post={post}/>
        
      ))}
    </div>
  )
}
