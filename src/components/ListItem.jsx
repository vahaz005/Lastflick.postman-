import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import './listitem.css'
import { Link } from 'react-router-dom';

function ListItem({title , url , overview , date , rating , id , listref}) {
  

  
 const [ishovered , setIshovered] =  useState(false ) ;
 useEffect(()=>{
  console.log(ishovered) ;

 } , [ishovered])
 
  const [isLoading, setIsLoading]  = useState(true) ;
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)  ;


    }, 1500)
  })
  
  return (
    isLoading
    ?
    <div className="listitem">
    <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2} />
    </SkeletonTheme>
</div>
:
<>

<Link className='listitem' to={`/movie/${title}`} style={{textDecoration:"none", color:"white"}}>
  {/* <button className={ishovered?"addlist__hovered" : "addlist"}>{listref}</button> */}
   
        <div className='image'>
            <img src={url} alt="" />
           
        </div>
        <div className="display">
        <div className="title1">{title}</div>
        <div className="card__runtime">
                        {date}
                        <span className="card__rating">{rating}</span>
                        
                    </div>
                <div className="content"> {overview && overview}</div>
        </div>
        
        </Link>
                
      </>
    
    
  )
}

export default ListItem
