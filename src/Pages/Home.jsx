import React, { useLayoutEffect } from 'react'
import Header from '../components/Header';
import List from '../components/List';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState   } from 'react';
import { Link } from 'react-router-dom';
import'./home.css'
import axios from 'axios';
import FilterOverlay from '../components/Filteroverlay';
import { useGlobalcontext } from '../components/Appcontext';
import { ClimbingBoxLoader } from 'react-spinners';
import Categories from './Categories';
import { flushSync } from 'react-dom';



function Home() {
    // const{authorname , setAuthor  , title , setTitle  , bookType , setBookType  , categories , setCategories} = useGlobalcontext() ;
    const [moviedata , setMoviedata] = useState([]) ;
    const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext() ;
// console.log(authorname) 
// console.log(title)

const [category, setCategory] = useState("") ;
   
   
    // const [upcoming , setUpcoming] = useState([]) ;
    // const [trendmovies , setTrend] = useState([]) ;
    // const [action , setAction ] = useState([]) ;
    // const [adventure , setAdventure] = useState([]);
    // const [animation , setAnimation] = useState([]);
    // const [comedy , setComedy] = useState([]);
    // const [crime , setCrime] = useState([]);
    // const [documenrty , setDocumentry] = useState([]);
    // const [Romance , setromance] = useState([]);

    
//    console.log(bookType)
//    console.log(authorname)
   

    const options = {
      method: 'GET',
      url: 'https://book-finder1.p.rapidapi.com/api/search',
      params: {
     book_type :"Fiction",

     
     
      
     

        
         
      
        results_per_page: '60',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };
    
    
//     if(authorname!=''){
//         options.params.author = `${authorname}`;
//     }
//     if(title!=''){
//         options.params.title = `${title}`;
//     }
//     if(categories!=''){
//         options.params.categories = `${categories}`
//     }

// //    useEffect(()=>{
// //     setTimeout(() => {
// //         setIsloading(false)
// //         console.log(isloading)
// //     }, 1500);
// //    } ,  [title])
  

    useEffect(  ()=>{
 
      (async ()=>{
        
        
       const response = await axios.request(options) ;
      
     
       
       console.log(response.data.results) ;
       setMoviedata(response.data.results) ;
console.log(moviedata)



      })()
    } , [])
   
    
  
//   const genreAction  = async (id) => {
//     const response  =await  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=28}`)
//     const data = await response.json() ;
//     setAction(data.results);
//     console.log(data.results)


//   }
//   const genreadventure  = async (id) => {
//     const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=12}`)
//     const data = await response.json() ;
//     setAdventure(data.results);


//   } 
//   const genreanimation  = async (id) => {
//     const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=16}`)
//     const data = await response.json() ;
//     setAnimation(data.results);


//   }
//   const genrecomedy  = async (id) => {
//     const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=35}`)
//     const data = await response.json() ;
//     setComedy(data.results);


//   }
//   const genrecrime  = async (id) => {
//     const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=80}`)
//     const data = await response.json() ;
//     setCrime(data.results);


//   }
//   const genredocumentry  = async (id) => {
//     const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=99}`)
//     const data = await response.json() ;
//     setDocumentry(data.results);


//   }
//   const genreromance  = async (id) => {
//     const response  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&with_genres=10749}`)
//     const data = await response.json() ;
//     setromance(data.results);


//   }

  
  
  
    return (

     <>
    
    
                    
                       <div className='booktypes'><Link style={{textDecoration:"none",color:"white"}} className='booktype' to={"BookType/Fiction"} >
                                <div className="posterImage">
                                    <img src="./src/assets/download.jpeg" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">Fiction</div>
                                    {/* <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <ion-icon name="star"></ion-icon>{" "}
                                        </span> */}
                                        {/* <div className="list">Add to List</div> */}
                                       
                                    {/* </div> */}
                                    {/* <div className="posterImage__description">{movie ? movie.overview : ""}</div> */}
                                </div>
                            </Link>
                            <Link style={{textDecoration:"none",color:"white"}} className='booktype' to={"BookType/Nonfiction"} >
                                <div className="posterImage">
                                    <img src="./src/assets/download (1).jpeg" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">Non-Fiction</div>
                                    {/* <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <ion-icon name="star"></ion-icon>{" "}
                                        </span> */}
                                        {/* <div className="list">Add to List</div> */}
                                       
                                    {/* </div> */}
                                    {/* <div className="posterImage__description">{movie ? movie.overview : ""}</div> */}
                                </div>
                            </Link></div>
                            

                     
               
    
   
     {showFilterOverlay && (
        <FilterOverlay
        
        />
      )}

{
    //   isloading
    //   ?
    //   <ClimbingBoxLoader color='red' className='loader' size={15}/>
    //   :
         <> 
         {/* <div className="book_type">
        <div className="posterImage"> 
        <img src="./src/assets/OIP.jpeg" alt="" /></div>
        <div className="posterImage"><img src="./src/assets/download.jpeg" alt="" /></div>
         </div> */}
      <List  listref={"/Category1"} title2={"Animals, Bugs & Pets"} data = { moviedata.slice(0,6)} />
       <List listref={"/Category2"} title2={"General Literature"} data = { moviedata.slice(6,12)} />
      <List listref={"/Category3"} title2={"Trending"} data = { moviedata.slice(12,18)} /> 
      <List listref={"/Category4"} title2={"Trending"} data = { moviedata.slice(18,24)} /> 
      <List listref={"Add to List"} title2={"Trending"} data = { moviedata.slice(24,30)} /> 
      <List listref={"Add to List"} title2={"Trending"} data = { moviedata.slice(30,36)} /> 
      <List listref={"Add to List"} title2={"Trending"} data = { moviedata.slice(36,42)} /> 
      
      </>


}
      {/* <Carousel
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
      
      </Carousel> */}
      

    </>
      
        
      
      
      
     
      
      
  
  
   
        
      
    )
}

export default Home
