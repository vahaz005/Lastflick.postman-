import React, { useContext, useState , useEffect  } from 'react' 
import axios from 'axios';
const Appcontext = React.createContext();
const AppProvider = ({children}) => {
    const [myList , setMyList] = useState([]) ;
    const [authorname, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    
    const [searchAuthor, setSearchAuthor] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
  
    const [isloading , setIsloading ] = useState(true) ;
   
      const option2= {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
       categories:"General Literature"  ,
  
       
       
        
       
  
          
           
        
          results_per_page: '60',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };
      const option3= {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
       categories:"Art, Creativity & Music"  ,
  
       
       
        
       
  
          
           
        
          results_per_page: '60',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };
      const option4= {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
       categories:"Hobbies, Sports & Outdoors"  ,
  
       
       
        
       
  
          
           
        
          results_per_page: '60',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };
      const option5= {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
       categories:"Science Fiction & Fantasy"  ,
  
       
       
        
       
  
          
           
        
          results_per_page: '60',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '18d7a784e7msh9756d6bc426dd00p1b553ajsn593c4573853f',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };
      const option6= {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
       categories:"Mystery & Suspense"  ,
  
       
       
        
       
  
          
           
        
          results_per_page: '60',
          page: '1'
        },
       
      };
      const option7= {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
       categories:"Science & Technology"  ,
  
       
       
        
       
  
          
           
        
          results_per_page: '60',
          page: '1'
        },
       
      };
      
      
      
  
    
  
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response = await axios.request(option1) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
      //    console.log(response.data.results) ;
      //    setCategory1(response.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
     
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response2 = await axios.request(option2) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
         
      //    setCategory2(response2.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response3 = await axios.request(option3) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
         
      //    setCategory3(response3.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response4 = await axios.request(option4) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
         
      //    setCategory4(response4.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response5 = await axios.request(option5) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
         
      //    setCategory5(response5.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response6 = await axios.request(option6) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
         
      //    setCategory6(response6.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
      // useEffect(  ()=>{
   
      //   (async ()=>{
          
          
      //    const response7 = await axios.request(option7) ;
      //   //  const response2 = await axios.request(option2) ;
      //    setIsloading(false)
       
         
         
      //    setCategory7(response7.data.results) ;
      //   //  setCategory2(response2.data.results);

  
  
  
      //   })
      //   ()
      // })
     


    
 
    const [bookType, setBookType] = useState("Fiction");
    const [showFilterOverlay, setShowFilterOverlay] = useState(false);
    return <Appcontext.Provider value={{myList , setMyList , authorname , setAuthor  , title , setTitle  , bookType , setBookType , showFilterOverlay , setShowFilterOverlay , searchAuthor, setSearchAuthor , searchTitle , setSearchTitle  }} >{children}</Appcontext.Provider>
} ;

const useGlobalcontext = () => {
    return useContext(Appcontext) ;
}
export{Appcontext, AppProvider , useGlobalcontext};
