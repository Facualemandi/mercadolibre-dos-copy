import React from 'react'
import '../Styles/NFeatures.css'
import { AiOutlineWifi } from "react-icons/ai";
import { GiLightningFrequency } from "react-icons/gi";
import { BiMicrophone } from "react-icons/bi";
import { BsLightbulb } from "react-icons/bs";


const NFeatures = () => {
  return (
    <>
     <p className='features_product'>Caracteristicas del producto </p>

     <section className='container_features'>
         <p className='caract'><AiOutlineWifi className='icon_feature'/> Es inalambrico : <b>No</b></p>
         <p className='caract'><GiLightningFrequency className='icon_feature'/> Con cancelación de ruido : <b>Si</b></p>
         <p className='caract'><BiMicrophone className='icon_feature'/> Con microfono : <b>Si</b></p>
         <p className='caract'><BsLightbulb className='icon_feature'/> Con luz LED : <b>No</b></p>
     </section>

    
    </>

  )
}

export default NFeatures