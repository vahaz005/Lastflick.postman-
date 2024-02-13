import React from 'react'
import ListItem from './ListItem'
import './list.css' 
import { Carousel } from 'react-responsive-carousel';


function List({data , title2}) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
 const array = data ;
  return (
    <>
 
       <div className='main'>
  <div className='title2'>{title2}<ion-icon name="chevron-forward-outline"></ion-icon></div>
    <div className='List'>
    {data.map((movie, index) => (
          <ListItem key={index} title={data[index].original_title || data[index].original_name} url = {IMG_URL + data[index].poster_path} overview ={data[index].overview}
          date = {data[index].release_date} rating ={data[index].vote_average} id ={data[index].id} />
        ))}
        
   




        
      
    </div>
    </div>

   
    </>
  )
}

export default List
