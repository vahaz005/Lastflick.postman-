import React, { useState } from 'react';
import './filteroverlay.css'; // Import CSS for animations
import { useGlobalcontext } from './Appcontext';
import Navlist from './Navlist';

const FilterOverlay = () => {
 const{author , setAuthor  , title , setTitle  , bookType , setBookType , categories , setCategories} = useGlobalcontext() ;
 const {showFilterOverlay, setShowFilterOverlay} = useGlobalcontext();
 const toggleFilterOverlay = () => {
   setShowFilterOverlay(!showFilterOverlay);
   console.log(showFilterOverlay)
 };
  

  return (
    <div className="filter-overlay-container">
      <div className="filter-overlay">
        {/* <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        /> */}
        {/* <select 
          value={bookType}
          onChange={e => setBookType(e.target.value)}
        >
          <option  value="">All Types</option>
          <option defaultChecked value="fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
        </select>
        <select
          value={categories}
          onChange={e => setCategories(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Animals, Bugs & Pets">Animals, Bugs & Pets</option>
          <option value="Art, Creativity & Music">Art, Creativity & Music</option>
          <option value="General Literature">General Literature</option>
          <option value="Hobbies, Sports & Outdoors">Hobbies, Sports & Outdoors</option>
          <option value="Science Fiction & Fantasy">Science Fiction & Fantasy</option>
          <option value="Real Life">Real Life</option>
          <option value="Science & Technology">Science & Technology</option>
          <option value="Mystery & Suspense">Mystery & Suspense</option>
        </select> */}
        
        {/* <button className='overlay__button' onClick={(e)=>{
            e.preventDefault() 
            toggleFilterOverlay()
        }}>Close</button> */}


        <div className="category">
          <ul className="sub__category">
           <li className="sub__sub"><Navlist Name={"Animals, Bugs & Pets"}/></li>
           <li className="sub__sub"><Navlist  Name={"Art, Creativity & Music"}/></li>
           <li className="sub__sub"><Navlist Name={"General Literature"}/></li>
           <li className="sub__sub"><Navlist Name={"Hobbies, Sports & Outdoors"}/></li>
           <li className="sub__sub"><Navlist Name={"Science Fiction & Fantasy"}/></li>
           <li className="sub__sub"><Navlist Name={"Real Life"}/></li>
           <li className="sub__sub"><Navlist Name={"Mystery & Suspense"}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;
