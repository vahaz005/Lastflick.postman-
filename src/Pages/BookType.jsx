import React from 'react'
import './category1.css'
import { useState , useEffect } from 'react';
import { useGlobalcontext } from '../components/Appcontext'
import List from '../components/List';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookType() {
    
    const {type} =useParams() ;
    
    console.log(type)
    const [booktype , setBooktype] = useState([]);
    const option1 = {
      method: 'GET',
      url: 'https://book-finder1.p.rapidapi.com/api/search',
      params: {
     book_type:type ,

     
     
      
     

        
         
      
        results_per_page: '100',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };
    useEffect(() => {
       // Set loading state to true before starting the requests
  
      const fetchCategoriesSequentially = async () => {
          try {
              const response1 = await axios.request(option1);
              setBooktype(response1.data.results);
              console.log(response1.data.results)
              
             
  
              // Continue with other categories...
  
             
          } catch (error) {
              console.error('Error fetching book data:', error);
               // Set loading state to false if there's an error
          }
      };
  
      fetchCategoriesSequentially(); // Call the function to start fetching categories
  }, [type]);
  
    
  return (
    <>
      <List   data = { booktype.slice(60,66)} />
       <List  data = {booktype.slice(66,72)} />
      <List  data = { booktype.slice(72,78)} /> 
      <List  data = { booktype.slice(78,84)} /> 
      <List  data = { booktype.slice(84,90)} /> 
      <List  data = { booktype.slice(90,96)} /> 
      <List  data = { booktype.slice(0,6)} /> 
    </>
  )
}

export default BookType