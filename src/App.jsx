import { useEffect, useState  } from 'react';
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Home from './Pages/Home';
import Movie from './Pages/book.jsx'
import MyList from './Pages/MyList.jsx';
import { useGlobalcontext } from './components/Appcontext.jsx';
import FilterOverlay from './components/Filteroverlay.jsx';





import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopRated from './Pages/TopRated.jsx';

import Category1 from './Pages/Category1.jsx';
import BookType from './Pages/BookType.jsx';
import SerchResult from './Pages/SerchResult.jsx';









function App() {
  const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext() ;
  const{  searchAuthor, setSearchAuthor , searchTitle , setSearchTitle } = useGlobalcontext() ;

  return (
    <>
    <Router>
   <Header/>
  
  
  

    <Routes>
   
    <Route path='/' index element={<Home />}></Route>
    <Route path='/search/:query' element={<SerchResult/>}></Route>
    <Route path="movie/:title" element={<Movie />}></Route>
<Route path='/MyList' element={<MyList/>}></Route>
<Route path="Category/:Name" element={<Category1/>}></Route>
<Route path="BookType/:type" element={<BookType/>}>

</Route>



    
    
    
   

    

    
    
   
    </Routes>

    </Router>
    </>
     


 
      
    
  )
}

export default App
