import React from 'react'
import List from '../components/List';
import { useParams } from "react-router-dom"
import Header from '../components/Header';
import { useState , useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
function TopRated() {
    const [Mdata , setdata] = useState([]) ;
    const {type} = useParams()
    const [airing_today , setAiring_Today] = useState([]);
    const [on_the_air , setONtheair] = useState([] ) ;
   
    const [adventure , setAdventure] = useState([]);
    const [animation , setAnimation] = useState([]);
    const [comedy , setComedy] = useState([]);
    const [crime , setCrime] = useState([]);
    const [documenrty , setDocumentry] = useState([]);
    const [Romance , setromance] = useState([]);
    const[popular , setPopular] = useState([] );
    const trendURltv = 'https://api.themoviedb.org/3/trending/tv/day?api_key=1cf50e6248dc270629e802686245c2c8';
    const airing_todayURL = 'https://api.themoviedb.org/3/tv/airing_today?api_key=1cf50e6248dc270629e802686245c2c8';
    const ontheairURL = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=1cf50e6248dc270629e802686245c2c8';
    const popularURL = 'https://api.themoviedb.org/3/tv/popular?api_key=1cf50e6248dc270629e802686245c2c8';
    const [tvtrend , setTvtrend] = useState([]);
    const trendDatatv = async () => {
      const response  =  await fetch(trendURltv) ;
      const data = await response.json() ;
    setTvtrend(data.results)
    console.log(data.results)
    
     return data.results ;
      
    }
    const tvaring_today = async () => {
      const response  =  await fetch(trendURltv) ;
      const data = await response.json() ;
    setAiring_Today(data.results)
    console.log(data.results)
    
     return data.results ;
      
    }
    const ontheair= async () => {
      const response  =  await fetch(ontheairURL) ;
      const data = await response.json() ;
    setONtheair(data.results)
    console.log(data.results)
    
     return data.results ;
      
    } 
    const popular1= async () => {
      const response  =  await fetch(popularURL) ;
      const data = await response.json() ;
    setPopular(data.results)
    console.log(data.results)
    
     return data.results ;
      
    } 
   
    const genreanimation  = async (id) => {
      const response  = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=16}`)
      const data = await response.json() ;
      setAnimation(data.results);
  
  
    }
    const genrecomedy  = async (id) => {
      const response  = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=35}`)
      const data = await response.json() ;
      setComedy(data.results);
  
  
    }
    const genrecrime  = async (id) => {
      const response  = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=80}`)
      const data = await response.json() ;
      setCrime(data.results);
  
  
    }
    const genredocumentry  = async (id) => {
      const response  = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=99}`)
      const data = await response.json() ;
      setDocumentry(data.results);
  
  
    }
    const genreromance  = async (id) => {
      const response  = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=10749}`)
      const data = await response.json() ;
      setromance(data.results);
  
  
    }
  
      
      const dataimp = useEffect(()=>{
       trendDatatv() ;
       tvaring_today();
       ontheair() ;
       popular1() ;
       
       genreanimation();
       genrecomedy();
       genrecrime();
       genredocumentry() ;
       genreromance();
      })
    
      
      
      
        return (
          <>
     

          
     
            
          
          <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Trending"} data = {tvtrend.slice(0,6)} />
      <List title2={"Trending"} data = {tvtrend.slice(6,12)} />
      <List title2={"Trending"} data = {tvtrend.slice(12,18)} />
      
      </Carousel>
      <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"Airing Today"} data = {airing_today.slice(0,6)} />
      <List title2={"Airing Today"} data = {airing_today.slice(6,12)} />
      <List title2={"Airing Today"} data = {airing_today.slice(12,18)} />
      
      </Carousel>
      <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>
      <List title2={"On The Air"} data = {on_the_air.slice(0,6)} />
      <List title2={"On The Air"} data = {on_the_air.slice(6,12)} />
      <List title2={"On The Air"} data = {on_the_air.slice(12,18)} />
      </Carousel>
      <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1}
         infiniteLoop={true}
         showStatus={false}>\
      <List title2={"Popular"} data = {popular.slice(0,6)} />
      <List title2={"Popular"} data = {popular.slice(6,12)} />
      <List title2={"Popular"} data = {popular.slice(12,18)} />
      </Carousel>
      <Carousel
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
    
      </Carousel> 
    
      
      
      
       
            
          </>
  )
}

export default TopRated
