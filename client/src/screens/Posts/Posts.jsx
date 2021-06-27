import React from 'react'
import Post from '../Post/Post'
import './Post.css'


export default function Posts(props) {
  const { posts } = props;

  return (
    <div className="post-container">
      
    
      {posts.map(post => (
        <Post key={post.id.count} post={post}/>
        
      ))}

    </div>
  )
}
