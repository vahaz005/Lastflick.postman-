import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Home from './Pages/Home';
import Movie from './Pages/Movie.jsx'





import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopRated from './Pages/TopRated.jsx';








function App() {

  return (
    <>
    <Router>
   <Header/>
    <Routes>
    <Route path='/' index element={<Home />}></Route>
    <Route path="movie/:id" element={<Movie />}></Route>
    <Route path="/Tv_Series" element= {<TopRated />}></Route>
    
    
   

    

    
    
   
    </Routes>

    </Router>
    </>
     


 
      
    
  )
}

export default App
