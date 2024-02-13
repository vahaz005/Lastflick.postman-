import React, { useState } from 'react'
import List from '../components/List'
import { useGlobalcontext } from '../components/Appcontext'

function MyList() {
    const {myList , setMyList} = useGlobalcontext();



  return (
    <>
    
    <List data={myList.slice(0,6)}>

      
    </List>
      
    
    
    </>
  )
}

export default MyList
