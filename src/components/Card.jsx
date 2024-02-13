import React from 'react'
import './card.css'

function Card({data}) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
    <h2 className='top'>Top Cast</h2>
    <div className='card'>
      
   
        {data.map((cast)=>{
          return(
          <div className="castcard">
            <div className="castimage">
              <img className="ref" src={IMG_URL + cast.profile_path} alt="" />

            </div>
            <div className="castname"><span>{cast.name}</span></div>

          </div>
        )

        })

        }
      
    </div>
    </>
  )
}

export default Card
