import React, { useState, useEffect } from 'react'
import axios from 'axios';


 function MovieBox(props) {
  const{Title,Year,Poster,imdbID} = props.info;
  const[details,setdetails] =  useState({ });
  
  const handledetails =() =>{
    const fetchdata = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=40d47472`);
      setdetails(response.data);
      props.getinfo(response.data);
      props.setflag(true)
      console.log(response.data);
    }
    fetchdata();
  }

  
  return (
  <div>
    <div className='box'>      
     <img   className='poster' src={Poster} alt="No image available" />  
     <p className='movie-name'>{Title}</p>
     <p className='director'>{Year}</p>
     <button className='buttonClass' onClick={handledetails}>Details</button>
    </div>
    <div>
      
    </div>

  </div>
  

  )
}
export default MovieBox
