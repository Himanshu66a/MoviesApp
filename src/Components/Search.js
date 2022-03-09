import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './Movie-box';
import Displaydetails from './Displaydetails';


function Search() {

  const [text, setText] = useState('');
  const [movie, setMovie] = useState([]);
  const [select,setselect] = useState();
 
  const [flag,setflag] = useState(false);
  const [noresult, setnoresult] = useState(false);
  const [timeoutId, updateTimeoutId] = useState();


  const fetchData = async (text1) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${text1}&apikey=40d47472`,
    );

    if(response.data.Search === undefined){
      setnoresult(true)
      return;
    }
    else{
      setnoresult(false)
    setMovie(response.data.Search);
  }
    console.log(response)
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setText(e.target.value)
    const timeout = setTimeout(() => fetchData(e.target.value), 400);
    updateTimeoutId(timeout);
  };

  return (

    <>
     
      <header>
        <div>
        
        <h2>React Movie App</h2>
        </div>
        <div>
          <input className='search' type="text" onChange={onTextChange} placeholder='Enter min. 3 letters' value={text}
          
          />
          
        </div>
      </header>

     

      <div>
        {
          flag && <Displaydetails info={select} setflag={setflag}/>
        }
      </div>

     
      <div className='display'>
        {
          
          movie.map((ele, ind) => {
            return (
              <MovieBox key={ind} info={ele} getinfo={setselect} setflag={setflag}  />
            )
          })
          }
        
      </div>

     
      
    </>
  );
}

export default Search

