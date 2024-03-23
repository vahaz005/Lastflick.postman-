import React, { useState , useEffect } from 'react'
import { useGlobalcontext } from '../components/Appcontext'
import List from '../components/List';
import axios from 'axios';
import './result.css'

function SerchResult() {
    const{  searchAuthor, setSearchAuthor , searchTitle , setSearchTitle  } = useGlobalcontext() ;
    const [result , setResult] = useState([]) ;
    console.log(searchTitle)

  
    const option1 = {
      method: 'GET',
      url: 'https://book-finder1.p.rapidapi.com/api/search',
      params: {
     title:searchTitle,
     author:searchAuthor,
   


     
     
      
     

        
         
      
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
              setResult(response1.data.results);
              console.log(response1.data.results)
              
             
  
         
  
             
          } catch (error) {
              console.error('Error fetching book data:', error);
               // Set loading state to false if there's an error
          }
      };
  
      fetchCategoriesSequentially(); // Call the function to start fetching categories
  }, [searchTitle , searchAuthor]);
  return (
    
    <>
    <h1>Search something</h1>
    
      {
        (searchAuthor || searchTitle) 
        ?
    
    <div className="main3">  <List   data = { result.slice(0,6)} />
       <List  data = { result.slice(6,12)} />
       <List  data = { result.slice(12,18)} />
       </div>
       :
       <h1>No results...</h1>
       
}

    </>

  )
}

export default SerchResult