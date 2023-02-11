import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
// import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from "@mui/material";
import "./Home.css";
import Search from "./Search";
function Home() {
  return (
    <div className="Home">
      <div className="home__header">
        <div className="home__headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>


        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
        <Avatar />
       </div></div>
        
        <div className="home_body">
          <img src="image.png"></img>
      

        <div className="home__inputContainer">
          <Search />
          </div>
          <div className="add">
          <div className="add-button">
         <div className="addicon"><AddIcon/></div>
        </div><div className="add-button2">Add shortcut
        </div>
        </div></div>
           </div>
  );
}

export default Home;
