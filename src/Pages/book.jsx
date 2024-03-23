import React, {useEffect, useState} from "react"
import "./movie.css"
import { Link, useParams } from "react-router-dom"
import List from "../components/List"
import Spinner from "../components/Spinner"
import axios from "axios"
import Card from "../components/Card"
import FilterOverlay from "../components/Filteroverlay"

import Skeleton, {SkeletonTheme}from "react-loading-skeleton"
import { useGlobalcontext } from "../components/Appcontext"





const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [similar  , setSimilar] = useState(['']) ;
    const{myList , setMyList} = useGlobalcontext() ;
    const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext() ;
    
    
    
    
  
    const { title} = useParams()
    console.log(title)
    const movie = {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
          
title:`"${title}"`
        
         
        },
        headers: {
          'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };
      
      
      
     
    
  
      useEffect(()=>{
        (async ()=>{
         const response = await axios.request(movie) ;
         console.log(response.data.results) ;
         setMovie(response.data.results[0]) ;
         console.log(response.data.results[0].authors)
       
         
  
  
  
        })()
      }  , [currentMovieDetail])

      console.log(currentMovieDetail)

//       const  author = {
//         method: 'GET',
//         url: 'https://book-finder1.p.rapidapi.com/api/search',
//         params: {
          
// author:`${currentMovieDetail.authors[0]
// }`
        
         
//         },
//         headers: {
//           'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
//           'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
//         }
//       };
      
      
      
     
    
  
//       useEffect(()=>{
//         (async ()=>{
//          const response = await axios.request(author) ;
//          console.log(response.data.results) ;
//          setSimilar(response.data.results) ;
  
  
  
  
//         })()
//       }  , [similar])
      
    

    return (
        <>
        {showFilterOverlay && (
        <FilterOverlay
        
        />
      )}
      

        



        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currentMovieDetail ? currentMovieDetail.published_works[0].cover_art_url : ""} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={currentMovieDetail ? currentMovieDetail.published_works[0].cover_art_url:""} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <ion-icon name="star"></ion-icon>
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? "Belongs to :"  + currentMovieDetail.series_name : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Author: " + currentMovieDetail.authors : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.categories
                                ? 
                                currentMovieDetail.categories.slice(0,3).map((genre , index)  => (
                                  
                                    <>
                                    <span className="movie__genre" id={index}>{genre}</span>
                                    </>
                                )) 
                                : 
                                ""
                               
                            }
                        
                            <button onClick={()=>{
                                setMyList([...myList, currentMovieDetail])
                            }} className="addlist">Add to Mylist
                            <ion-icon className="icon" name="add-circle-outline"></ion-icon>
                            </button>
                            
                             
                        </div>
                        
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.summary : ""}</div>
                    </div>
                    
                </div>
            </div>
            
           
        
        </div>
        
       
{/* 
        <div className="vahaz2">
        <List   title2={"Recommended"} data = {recommend ? recommend.slice(0,6) || recommendtv.slice(0,16) : ""} />
        </div>

     
            
            <Card data = {cast.slice(0,8)}/> */}
            

            
            

      

            </>
      
            

    )
}

export default Movie
