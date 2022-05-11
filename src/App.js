import React, { useState } from 'react';
import './App.css';
import ANav from './Components/ANav';
import CMenu from "./Components/CMenu";

function App() {

   const [menu, setMenu] = useState(false)



   const openMenu = () => { menu ? setMenu(false) : setMenu(true); }


  return (
    <> 

    <ANav openMenu={openMenu} menu={menu} />
    <CMenu menu={menu}/>

  </>
  );
}

export default App;
