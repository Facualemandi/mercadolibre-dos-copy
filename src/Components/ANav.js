import React from "react";
import Logo from "../Images/logoMc.png";
import logoDesktop from "../Images/logo-mercado-libre.png";
import promoDisney from "../Images/promodisneysub.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import "../Styles/ANav.css";
import BLocation from "./BLocation";
import FMenuDesktop from "./FMenuDesktop";

const ANav = ({ openMenu, menu }) => {
  return (
    <>
      <nav className="section_container_nav">
        <section className="container_nav">

        <section className="section_desktop_total">
          <img  src={logoDesktop} alt={"Mercado Libre"} className="logo_desktop" />
          <img className="logo" src={Logo} alt="Mercado Libre"/>

            <div className="location_desktop">
               <MdOutlineLocationOn/>
               <p className="location_desktop_p">
                 Envíar a
                 <span>Córdoba Capital </span>
               </p>
                
            </div>

        </section>

            

    <section className="input_menu_desktop">
          <div className="section_search">
            <FiSearch className="icon_logo" />
            <input
              className="input_nav"
              type={"text"}
              placeholder="Estoy buscando..."
            />
          </div>
            <FMenuDesktop />
    </section>

<section className="section_account_desktop">
          <img
            src={promoDisney}
            alt={"Promo dinsey"}
            className="logo_disney_desktop"
          />

          <ul className="ul_desktop_account">
            <li>Creá tu cuenta</li>
            <li> Ingresá</li>
            <li> Mis Compras</li>
             <BsCartCheck className="cart_desktop_account"/>
          </ul>

</section>

          <section className="icons_nav">
            <AiOutlineShoppingCart className="icon_menu_cart" />
            <GiHamburgerMenu className="icon_menu_nav" onClick={openMenu} />
          </section>
        </section>
        <hr />
        <BLocation />
      </nav>
    </>
  );
};

export default ANav;
