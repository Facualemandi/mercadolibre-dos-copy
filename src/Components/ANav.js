import React from "react";
import Logo from "../Images/logoMc.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "../Styles/ANav.css";
import BLocation from "./BLocation";

const ANav = ({ openMenu, menu }) => {
  return (
    <>
      <section className="section_container_nav">
        <section className="container_nav">
          <img className="logo" src={Logo} alt="Mercado Libre" />
          <div className="section_search">
            <FiSearch className="icon_logo" />
            <input
              className="input_nav"
              type={"text"}
              placeholder="Estoy buscando..."
            />
          </div>

          <section className="icons_nav">
            <AiOutlineShoppingCart className="icon_menu_cart" />
            <GiHamburgerMenu className="icon_menu_nav" onClick={openMenu} />
          </section>
        </section>
        <hr />
        <BLocation />
      </section>

    </>
  );
};

export default ANav;
