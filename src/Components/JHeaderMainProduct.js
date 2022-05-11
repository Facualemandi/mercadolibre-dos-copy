import React from "react";
import { MdNavigateNext } from "react-icons/md";
import '../Styles/JHeaderMainProduct.css'

const JHeaderMainProduct = () => {
  return (
    <>
    <section className="container_header_main">
      <p>Volver Al listado</p>
      <hr className="hr_header"/>
      <ul className="headerOne">
        <a href="#"><li>Computacion  <MdNavigateNext/> </li></a>
        <a href="#"><li>Accesorios para Pc Gaming <MdNavigateNext/> </li></a>
        <a href="#"><li>Auriculares <MdNavigateNext/> </li></a>
        <a href="#"><li>HyperX <MdNavigateNext/>  </li></a>
        <a href="#"><li>Headset <MdNavigateNext/> </li></a>
        <a href="#"><li>Con micrófono <MdNavigateNext/> </li></a>
      </ul>

      <ul className="headerTwo">
          <a href="#"><li>Compratir</li></a>
          <hr className="hr_header"/>
          <a href="#"><li>Vender uno igual</li></a>
      </ul>

    </section>
    </>
  );
};

export default JHeaderMainProduct;
