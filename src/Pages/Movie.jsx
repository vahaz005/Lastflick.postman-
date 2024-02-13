import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import List from "../components/List"
import Spinner from "../components/Spinner"
import Card from "../components/Card"

import Skeleton, {SkeletonTheme}from "react-loading-skeleton"





const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    
    
    
  
    const { id } = useParams()
    const [similar , setSimilar] = useState([]) ;
    const [similartv , setSimilartv] = useState([]) ;
    const [isLoading , setIsLoading] = useState(true)
    const [cast , setCast] = useState([] ) ;
    const [vedio , setVedio] = useState([]) ;
    const [recommend ,setRecommend ] =useState([]) ;
    const [recommendtv ,setRecommendtv ] =useState([]) ;

     

     useEffect(()=>{
        setTimeout(()=>{
          setIsLoading(false)  ;
    
    
        }, 1500)
      })
      
     
    useEffect(() => {
        getData()
        similarData() ;
        similarDatatv() ;
        getCast() ;
        vedioDatatv() ;
        Recommend() ;
       
      
        
    }, [currentMovieDetail ,isLoading, setIsLoading , setMovie])

    const getData = () => {
       
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    
    const Recommend = async () => {
        
        const response  =  await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=1cf50e6248dc270629e802686245c2c8`) ;
        const data = await response.json() ;
      setRecommend(data.results)
      
      
      
       return data.results ;
        
      }
    


  

    const similarData = async () => {
        
        const response  =  await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=1cf50e6248dc270629e802686245c2c8`) ;
        const data = await response.json() ;
      setSimilar(data.results)
      
      
       return data.results ;
        
      }
      const getCast = async() => {
       
      const response = await  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`) ;
        const castdata = await response.json();
        setCast(castdata.cast) ;
        

    }
      const similarDatatv = async () => {
        const response  =  await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=1cf50e6248dc270629e802686245c2c8`) ;
        const tvdata = await response.json() ;
      setSimilartv(tvdata.results)
      
      
       return tvdata.results ;
        
      }
      const vedioDatatv = async () => {
        const response  =  await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1cf50e6248dc270629e802686245c2c8`) ;
        const vediodata = await response.json() ;
      setVedio(vediodata.results)

      
      
      
       
        
      }
    

    return (
        
      

        
        isLoading 
        ?
        <div className="movie">
    <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2} />
    </SkeletonTheme>
</div>
         
       

        
        
        :
<>


        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <ion-icon name="star"></ion-icon>
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span>
                                    </>
                                )) 
                                : 
                                ""
                               
                            }
                        
                            <button onClick={()=>{
                                setMyList([...myList, currentMovieDetail])
                            }}>
                            <ion-icon className="icon" name="add-circle-outline"></ion-icon>
                            </button>
                            
                             
                        </div>
                        
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            
           
        
        </div>
        
        <div className="vahaz">
        <List   title2={"Similar"} data = { similar.slice(0,6) || similartv.slice(0,16)} />
        </div>

        <div className="vahaz2">
        <List   title2={"Recommended"} data = {recommend ? recommend.slice(0,6) || recommendtv.slice(0,16) : ""} />
        </div>

     
            
            <Card data = {cast.slice(0,8)}/>
            

            
            

      

            </>
      
            

    )
}

export default Movie
