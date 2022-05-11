import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import '../Styles/BLocation.css'

const BLocation = () => {
  return (
     <>
     <section className='location_container'>

       <div className='location'>
         <MdOutlineLocationOn className='location_icon'/>
         <p>Envíar a Córdoba Capital</p>
       </div>
       

       <AiOutlineRight className='right_location'/>
        

     </section>
     </>
  )
}

export default BLocation