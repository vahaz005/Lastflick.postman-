import React, { useState } from 'react'
import List from '../components/List'
import { useGlobalcontext } from '../components/Appcontext'
import FilterOverlay from '../components/Filteroverlay';

function MyList() {
    const {myList , setMyList} = useGlobalcontext();
    const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext() ;


  return (
    <>
    {showFilterOverlay && (
        <FilterOverlay
        
        />
      )}
    
    <List data={myList.slice(0,6)}>

      
    </List>
    <List data={myList.slice(6,12)}>

      
    </List>
    <List data={myList.slice(12,18)}>

      
    </List>
    <List data={myList.slice(18,24)}>
      
    </List>
    <List data={myList.slice(24,30)}>

      
    </List>
    
      
    
    
    </>
  )
}

export default MyList
