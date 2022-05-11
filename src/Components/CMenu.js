import React from "react";
import '../Styles/CMenu.css'
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { BiAlignLeft } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { MdOutlineSell } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";




const CMenu = ({menu}) => {
  return (
    <>
    <section>
      <ul className={`container_menu ${menu && 'is-active'}`}>
        <li> <GrHomeRounded/> Inicio</li>
        <li> <MdOutlineLocalOffer/> Ofertas</li>
        <li> <AiOutlineClockCircle/> Historial</li>
        <li> <FaHeadphonesAlt/> Ayuda</li>
        <hr className="hr_menu"/>
        <li> <IoFastFoodOutline/>  SuperMercado</li>
        <li> <GiUnderwearShorts/> Moda</li>
        <li> <AiOutlineStar/> Mas vendidos</li>
        <li> <BsShop/>  Tiendas Oficiales</li>
        <li> <BiAlignLeft/> Categorias</li>
        <hr className="hr_menu"/>
        <li> <RiFileList2Line/> Resumen</li>
        <li> <MdOutlineSell/> Vender</li>
      </ul>
    </section>
    </>
  );
};

export default CMenu;
