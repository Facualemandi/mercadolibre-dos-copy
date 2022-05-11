import React, { useState } from 'react';
import './App.css';
import ANav from './Components/ANav';
import CMenu from "./Components/CMenu";
import DSimilarProducts from './Components/DSimilarProducts';

function App() {

   const [darkMode, setDarkMode] = useState(false)



   const [menu, setMenu] = useState(false)



   const openMenu = () => { menu ? setMenu(false) : setMenu(true); }
   const handleDarkMode = () => { darkMode ? setDarkMode(false) : setDarkMode(true)}


  return (
    <> 
     
    <ANav openMenu={openMenu} menu={menu} />
    <CMenu menu={menu}/>
    <DSimilarProducts darkMode={darkMode} handleDarkMode={handleDarkMode} />



  </>
  );
}

export default App;
