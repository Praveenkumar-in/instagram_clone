import React, { useEffect, useState } from 'react'
function suggestion() {
    const [profile,setProfile]=useState(null);
    const [suggestions,setSuggestions]=useState([]);
    useEffect(()=>{
    fetch('http://localhost:8000/profile')
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch(err =>console.log(err) )

    fetch('http://localhost:8000/suggestion')
    .then(data => data.json())
    .then(data => setSuggestions(data))
    .catch(err =>console.log(err) )
    },[])
  return (
    <div >
      <div className='suggestion w-75 m-4  '>
      {profile ?
    <div className='d-flex align-items-center'>
                <img 
                    className='rounded-circle' 
                    src={profile.profile_pic} 
                    alt='Profile' 
                    
                    style={{width: '35px', height: '35px', objectFit: 'cover', marginRight: '10px'}} />
                <h4>{profile.username}</h4><p className='ms-auto text-primary'>Switch</p>
                </div>
                :<p>loading</p>}
            
  
   <div className='d-flex'><p>Suggestion for you </p><b className='ms-auto'>See All</b></div>
   {suggestions.length > 0 ? (
    <div>
      {suggestions.map((suggestion)=>(
        <div className='my-3 'key={suggestion.id}>
          <div className='d-flex'>
            <img 
                    className='rounded-circle' 
                    src={suggestion.profile_pic} 
                    alt='Profile' 
                    
                    style={{width: '35px', height: '35px', objectFit: 'cover', marginRight: '10px'}} />
                    <strong>{suggestion.username}</strong>
                    {/* <p className='text-primary ms-auto'>Follow</p>  */}
                    <button className="btn border border-primary text-primary bg-white ms-auto">Follow</button>


</div>
          </div>
          ))}
        
        </div>
  ):(
  
    <p>loading</p>)}
   
    </div>
    </div>
  
  );}

export default suggestion;