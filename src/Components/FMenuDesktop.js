import React from "react";
import '../Styles/FMenuDesktop.css'
import { HiChevronDown } from "react-icons/hi";

const FMenuDesktop = () => {
  return (
    <>
      <section className="section_total_menu">
        <ul className="total_menu_desktop">
          <li>Categorias <HiChevronDown/> </li>
          <li>Ofertas</li>
          <li>Historial</li>
          <li>SuperMercado</li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Ayuda</li>
          <li>Mas vendidos</li>
        </ul>
      </section>
    </>
  );
};

export default FMenuDesktop;
