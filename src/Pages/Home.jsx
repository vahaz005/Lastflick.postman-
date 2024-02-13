import React from 'react'
import Header from '../components/Header';
import List from '../components/List';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import'./home.css'


function Home() {
    const [moviedata , setMoviedata] = useState([]) ;
    const [upcoming , setUpcoming] = useState([]) ;
    const [trendmovies , setTrend] = useState([]) ;
    const [action , setAction ] = useState([]) ;
    const [adventure , setAdventure] = useState([]);
    const [animation , setAnimation] = useState([]);
    const [comedy , setComedy] = useState([]);
    const [crime , setCrime] = useState([]);
    const [documenrty , setDocumentry] = useState([]);
    const [Romance , setromance] = useState([]);

    
     const genres = [
          {
              "id": 28,
              "name": "Action"
          },
          {
              "id": 12,
              "name": "Adventure"
          },
          {
              "id": 16,
              "name": "Animation"
          },
          {
              "id": 35,
              "name": "Comedy"
          },
          {
              "id": 80,
              "name": "Crime"
          },
          {
              "id": 99,
              "name": "Documentary"
          },
          {
              "id": 18,
              "name": "Drama"
          },
          {
              "id": 10751,
              "name": "Family"
          },
          {
              "id": 14,
              "name": "Fantasy"
          },
          {
              "id": 36,
              "name": "History"
          },
          {
              "id": 27,
              "name": "Horror"
          },
          {
              "id": 10402,
              "name": "Music"
          },
          {
              "id": 9648,
              "name": "Mystery"
          },
          {
              "id": 10749,
              "name": "Romance"
          },
          {
              "id": 878,
              "name": "Science Fiction"
          },
          {
              "id": 10770,
              "name": "TV Movie"
          },
          {
              "id": 53,
              "name": "Thriller"
          },
          {
              "id": 10752,
              "name": "War"
          },
          {
              "id": 37,
              "name": "Western"
          }
      ]
   
    
     const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
    
    
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const trendURl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=1cf50e6248dc270629e802686245c2c8';
  const upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1cf50e6248dc270629e802686245c2c8';
  const searchURL = BASE_URL + '/search/movie?'+API_KEY;
  const fetchData = async () => {
    const response  =  await fetch(API_URL) ;
    const data = await response.json() ;
  setMoviedata(data.results)

   return data.results ;
    
  }
  const trendData = async () => {
    const response  =  await fetch(trendURl) ;
    const data = await response.json() ;
  setTrend(data.results)
  
   return data.results ;
    
  }
  const upcoming1 = async () => {
    const response  =  await fetch(upcomingURL) ;
    const data = await response.json() ;
  setUpcoming(data.results)
  
   return data.results ;
    
  }
  
  const dataimp = useEffect(()=>{
    fetchData() ;
    trendData() ;
    upcoming1() ;
    genreAction();
    genreadventure();
    genreanimation();
    genrecomedy();
    genrecrime();
    genredocumentry() ;
    genreromance();
    
    
  })
  const genreAction  = async (id) => {
    const response  =await  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=28}`)
    const data = await response.json() ;
    setAction(data.results);
    console.log(data.results)


  }
  const genreadventure  = async (id) => {
    const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=12}`)
    const data = await response.json() ;
    setAdventure(data.results);


  } 
  const genreanimation  = async (id) => {
    const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=16}`)
    const data = await response.json() ;
    setAnimation(data.results);


  }
  const genrecomedy  = async (id) => {
    const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=35}`)
    const data = await response.json() ;
    setComedy(data.results);


  }
  const genrecrime  = async (id) => {
    const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=80}`)
    const data = await response.json() ;
    setCrime(data.results);


  }
  const genredocumentry  = async (id) => {
    const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=99}`)
    const data = await response.json() ;
    setDocumentry(data.results);


  }
  const genreromance  = async (id) => {
    const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=10749}`)
    const data = await response.json() ;
    setromance(data.results);


  }

  
  
  
    return (
      <>
      
      <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        moviedata.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <ion-icon name="star"></ion-icon>{" "}
                                        </span>
                                        <div className="list">Add to List</div>
                                       
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
     
   
        
                <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Trending"} data = { trendmovies.slice(0,6)} />
      <List title2={"Trending"} data = { trendmovies.slice(6,12)} />
      <List title2={"Trending"} data = { trendmovies.slice(12,18)} />
      
      </Carousel>
      <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"UpComing"} data = { upcoming.slice(0,6)} />
      <List title2={"UpComing"} data = { upcoming.slice(6,12)} />
      <List title2={"UpComing"} data = { upcoming.slice(12,18)} />
      
      </Carousel>
      <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Action"} data = { action.slice(0,6)} />
      <List title2={"Action"} data = { action.slice(6,12)} />
      <List title2={"Action"} data = { action.slice(12,18)} />
      
      </Carousel> <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Animation"} data = { animation.slice(0,6)} />
      <List title2={"Animation"} data = { animation.slice(6,12)} />
      <List title2={"Animation"} data = { animation.slice(12,18)} />
      
      </Carousel> <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Comedy"} data = { comedy.slice(0,6)} />
      <List title2={"Comedy"} data = { comedy.slice(6,12)} />
      <List title2={"Comedy"} data = { comedy.slice(12,18)} />
      
      </Carousel> <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Crime"} data = { crime.slice(0,6)} />
      <List title2={"Crime"} data = { crime.slice(6,12)} />
      <List title2={"Crime"} data = { crime.slice(12,18)} />
      
      </Carousel> <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Romance"} data = { Romance.slice(0,6)} />
      <List title2={"Romance"} data = { Romance.slice(6,12)} />
      <List title2={"Romance"} data = { Romance.slice(12,18)} />
      
      </Carousel> <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Documentry"} data = { documenrty.slice(0,6)} />
      <List title2={"Documentry"} data = { documenrty.slice(6,12)} />
      <List title2={"Documentry"} data = { documenrty.slice(12,18)} />
    
      </Carousel> <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Adventure"} data = { adventure.slice(0,6)} />
      <List title2={"Adventure"} data = { adventure.slice(6,12)} />
      <List title2={"Adventure"} data = { adventure.slice(12,18)} />
      
      </Carousel>
      

    
      
        
      
      
      
     
      
      
  
  
   
        
      </>
    )
}

export default Home
