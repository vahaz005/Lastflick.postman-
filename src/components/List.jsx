import React from 'react'
import ListItem from './ListItem'
import './list.css' 
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


function List({data , title2 , listref}) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
 const array = data ;
  return (
    <>
 
       <div className='main'>
        {/* <h1 className="title2">{title2}</h1> */}
        {/* <Link to={listref}><a href="" className='anchor'>See All </a></Link> */}
  
    <div className='List'>
    {data && data.map((movie, index) => (
          <ListItem listref={listref} key={index} title={data[index].title}  url={data[index].published_works[0].cover_art_url}  overview ={data[index].summary}
          date = {data[index].book_type} rating ={data[index].authors} id ={data[index].
            canonical_published_work_id
            } />
        ))}
        
   




        
      
    </div>
    </div>

   
    </>
  )
}

export default List
