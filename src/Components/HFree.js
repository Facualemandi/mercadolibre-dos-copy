import React from 'react'
import { AiFillCar } from "react-icons/ai";
import { CgCornerDownLeft } from "react-icons/cg";
import '../Styles/HFree.css'

const HFree = () => {
  return (
      <>

<div>
        <section className={` desktop_free `}>
        <section className="desktop_envio_gratis">
          <AiFillCar className="faCarSide"/>
          <div>
            <p> Llegara gratis mañana </p>
            <a href="#" > Ver más formas de entrga</a>
          </div>
        </section>

        <section className="desktop_devolucion_gratis">
            <CgCornerDownLeft className="faLeftLong" />
            <div className="totalDevoluciones">
               <p> Devolución de 30 días </p>
               <span className="devolucion"> Tenés 30 días desde que lo recibís </span>
               <a  href="#" > Conoce más</a>
            </div>
        </section>
      </section>
    </div>
      
      </>
  )
}

export default HFree