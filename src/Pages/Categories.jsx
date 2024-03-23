import React, { useState , useEffect } from 'react'
import './categories.css'
import { useParams  } from 'react-router-dom'
import List from '../components/List';
import axios from 'axios';

function Categories() {
    const {genre} = useParams() ;
    const [catdata , setCatdata] = useState([]) ;
    

    const options = {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
      categories:`${genre}` ,
          
           
        
          results_per_page: '60',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };
      
      
      
     
    
  
      useEffect(()=>{
        (async ()=>{
         const response = await axios.request(options) ;
         console.log(response.data.results) ;
         setCatdata(response.data.results) ;
  console.log(catdata)
  
  
  
        })()
      }  , [genre])
  return (
    <>
     <List title2={"Trending"} data = { catdata.slice(0,6)} />
       <List title2={"Trending"} data = { catdata.slice(6,12)} />
      <List title2={"Trending"} data = { catdata.slice(12,18)} /> 
      <List title2={"Trending"} data = { catdata.slice(18,24)} /> 
      <List title2={"Trending"} data = { catdata.slice(24,30)} /> 
      <List title2={"Trending"} data = { catdata.slice(30,36)} /> 
      <List title2={"Trending"} data = { catdata.slice(36,42)} /> 
      <List title2={"Trending"} data = { catdata.slice(42,48)} /> 
      <List title2={"Trending"} data = { catdata.slice(48,54)} /> 
      <List title2={"Trending"} data = { catdata.slice(54,60)} /> 

    </>
  )
}

export default Categories