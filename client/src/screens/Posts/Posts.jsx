import React from 'react'
import Post from '../Post/Post'


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
