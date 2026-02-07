
import React,  { useState, useEffect } from 'react';
function Post() {
  const [posts, setPosts]  = useState([]);


  const [isLoading, setIsLoading] = useState(true); // New state
  const [isError, setIsError] = useState(false); // New state
 useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then(res => {
        if (!res.ok) { // Check if response status is not 2xx
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setIsLoading(false); // Stop loading on success
      })
      .catch(error => {
        console.error("Fetch failed:", error);
        setIsError(true); // Set error state
        setIsLoading(false); // Stop loading on failure
      });
  }, []);
if (isLoading) {
    return <div>Loading...</div>; // Show when data is fetching
  }
if (isError) {
    return <div>Error loading posts. Please check the server and network.</div>; // Show on error
  }
 return (
 <div>
  {posts.length > 0 ? (
    <div className='posts-container'>
      {posts.map((post) => (
        <div key={post.id} className='post-card'>
          <div className='d-flex align-items-center'>
                <img 
                    className='rounded-circle' 
                    src={post.user.profile_pic} 
                    alt='Profile' 
                    
                    style={{width: '35px', height: '35px', objectFit: 'cover', marginRight: '10px'}} />
                <strong>{post.user.username}</strong><button className="btn btn-following m-3">Following</button>

            </div>
            <div className='post-image-wrapper'>
                <img 
                    src={post.image} 
                    alt={post.caption} 
                    style={{width: '100%', marginTop: '10px'}} 
                />
            </div>
          <p><i className="bi bi-heart"></i><strong>{post.likes}</strong> likes 🗨️ ⌲ </p>
            <p>## {post.caption}</p>
           </div> 
    ))} 
</div> ):(
<div>no Posts</div>
 )}
</div>
 );}
export default Post;