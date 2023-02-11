import React from 'react'
import "./Search.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MicNoneTwoToneIcon from '@mui/icons-material/MicNoneTwoTone';
export default function Search() {
  return (
    // <form className='search'>
   <div className='search__input'>
   <SearchTwoToneIcon/>
   <input  type="text" placeholder="Search Google and type a URL" />
   <MicNoneTwoToneIcon/>
   </div>
    // </form>
      
    
  )
}
