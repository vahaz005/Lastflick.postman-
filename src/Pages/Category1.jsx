import React from 'react'
import './category1.css'
import { useState , useEffect } from 'react';
import { useGlobalcontext } from '../components/Appcontext'
import List from '../components/List';
import axios from 'axios';
import FilterOverlay from '../components/Filteroverlay';
import { useParams} from 'react-router-dom';

function Category1() {
    
    const {Name} =useParams() ;
    
    console.log(Name)
    const [category1 , setCategory1] = useState([]);
    const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext() ;
    const option1 = {
      method: 'GET',
      url: 'https://book-finder1.p.rapidapi.com/api/search',
      params: {
     categories:Name ,

     
     
      
     

        
         
      
        results_per_page: '60',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };
    useEffect(() => {
       
  
      const fetchCategoriesSequentially = async () => {
          try {
              const response1 = await axios.request(option1);
              setCategory1(response1.data.results);
              console.log(response1.data.results)
              
             
  
         
  
             
          } catch (error) {
              console.error('Error fetching book data:', error);
               // Set loading state to false if there's an error
          }
      };
  
      fetchCategoriesSequentially(); // Call the function to start fetching categories
  }, [Name]);
 
    
  return (
  
    <>
      {showFilterOverlay && (
        <FilterOverlay
        
        />
      )}

      <List   data = { category1.slice(0,6)} />
       <List  data = { category1.slice(6,12)} />
      <List  data = { category1.slice(12,18)} /> 
      <List  data = { category1.slice(18,24)} /> 
      <List  data = { category1.slice(24,30)} /> 
      <List  data = { category1.slice(30,36)} /> 
      <List  data = { category1.slice(36,42)} /> 
    </>
  )
}

export default Category1