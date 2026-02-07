import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function story() {
  const [story,setStory]=useState([]);
  const navigate = useNavigate();
  let tot=0;
  useEffect(()=>{
    fetch('http://localhost:8000/story')
    .then(data =>data .json())
    .then(data =>setStory(data))
    .catch(err=>console.log(err))

  },[])
  return (
    <div className='story   '>
      <div className="d-none">{tot=story.length}</div>
    {story.length > 0 ?( 
      story.map((story)=>(
        <div key={story.id} className='story-item  'onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
       <div className='gradient-border'>    <img 
                    className=' story-image ' 
                    src={story.user.profile_pic} 
                    alt='Profile'  
                    
                    // style={{width: '35px', height: '35px', objectFit: 'cover', marginRight: '10px'}}
                     />
                     </div>
                    <p className='text-truncate 'style={{width:"45px"}}>{story.user.username}</p>
        </div>

    ))
  ):(
     
      <p>loading</p>
    )}
    </div>
  )
}

export default story