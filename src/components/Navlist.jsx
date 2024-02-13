import React from 'react'
import './navlist.css'
import { Link } from "react-router-dom"

function Navlist({Name ,active, _id , link}) {
  
  return (
    <>
    <li>
        <Link className='link' to={link}>{Name}</Link>
    </li>
    </>
  )
}

export default Navlist
