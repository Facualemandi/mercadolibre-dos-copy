import React from 'react'
import '../Styles/PInformationSell.css'
import { GoLocation } from "react-icons/go";
import { BiMedal } from "react-icons/bi";
import { BiMessageAdd } from "react-icons/bi";
import { FcAlarmClock } from "react-icons/fc";


const PInformationSell = () => {
  return (
    <>

    <section className='container_info'>
        <p className='p_info'>Información sobre el vendedor</p>
        
        <section className='info_location'>
              <GoLocation/>
              <p>
                  <span>Ubicación </span>
                  <span>Puerto Madero, Capital Federal</span>
              </p>
        </section>

        <section className='mercadolibre_platinum'>
            <BiMedal className='icon_medal'/>
            <p>
                <span>MercadoLíder Platinium</span>
                <span>¡Es uno de los mejores sitios!</span>
            </p>
        </section>


        <section className='colors_info'>
            <span className='color'></span>
            <span className='color'></span>
            <span className='color'></span>
            <span className='color'></span> 
            <span className='color'></span> 
        </section>

        <section className='container_info_sell'>
            <div className='sales'>
                <p>30577</p>
                <p>Ventas en los últimos 60 días</p>
            </div>
            <div className='atention'>
               <BiMessageAdd/>
                <p>Brinda bunea atención</p>
            </div>
            <div className='clock'>
                 <FcAlarmClock/>
                <p>Despacha sus productos a tiempo</p>
            </div>
        </section>

    </section>
    
    </>
  )
}

export default PInformationSell