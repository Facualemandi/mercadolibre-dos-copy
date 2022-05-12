import React from "react";
import { MdSecurityUpdateGood } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import '../Styles/LSegurity.css'

const LSegurity = () => {
  return (
    <>
      <section className="container_segurity">
        <section className="segurity">
          <MdSecurityUpdateGood className="icons_segurity" />
          <p>
           <span>Compra Protegida </span>
           <span> recibí el producto que esperabas o te devolvemos tu dinero.</span>
          </p>
        </section>

        <section className="points">
            <AiOutlineTrophy className="icons_segurity"/>
            <p>
           <span>Mercado Puntos </span>
           <span> Sumás 489 puntos. </span>
          </p>
        </section>

        <section className="month">
            <BiMedal className="icons_segurity"/>
            <p>12 meses de garantía de fábrica.</p>
        </section>

         
      </section>
    </>
  );
};

export default LSegurity;
