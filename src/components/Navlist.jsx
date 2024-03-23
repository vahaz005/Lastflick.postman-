import React from 'react'
import './navlist.css'
import { Link, NavLink } from "react-router-dom"

function Navlist({Name ,active, _id , link}) {
  
  return (

    <>
   
   <Link  className="link" to={`/Category/${Name}`} >{Name}</Link>
    </>
  )
}

export default Navlist
