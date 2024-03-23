import React, { useState } from 'react'
import Navlist from './Navlist'
import './header.css'
import Search from './Search'
import { useGlobalcontext } from './Appcontext'
import { Link } from 'react-router-dom'

function Header() {
  const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext();
  const toggleFilterOverlay = () => {
    setShowFilterOverlay(!showFilterOverlay);
    console.log(showFilterOverlay)
  };
  return (
    <>
   <header className='header'>
    <a href="#" className='logo'>BookHub.Com</a>
    
    <Search />
    <ul className='nav'>
        <Link className='link2' _id = "1" to={"/"}  active="true" >Home</Link>
        <Link className='link2' to={"/MyList"}>My List</Link>
        <button className='filter__button'  onClick={(e)=>{
          e.preventDefault() ;
          toggleFilterOverlay()
        }} >Categories</button>
        
    </ul>
    
   </header>
   </>
  )
}

export default Header
