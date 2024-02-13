import React, { useState } from 'react'
import './search.css'
import { json } from 'react-router-dom';
import { Link } from 'react-router-dom';

   
function Search() {
  const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
  
  
  

   

  

  
  return (
    <div className="search">
      <input type="text" placeholder='Search' className='inputM'
      
      

       /> 
       <Link  >
       <button > <ion-icon name="search-outline"></ion-icon></button></Link>
   
     
    </div>
    
  )
}

export default Search
