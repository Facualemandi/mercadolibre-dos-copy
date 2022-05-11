import React from "react";
import "../Styles/DSimilarProducts.css";
import { BsFillLightningFill } from "react-icons/bs";
import auri1 from "../Images/auriculares1.png";
import auri2 from "../Images/auriculares2.png";
import auri3 from "../Images/auriculares3.png";
import EDarkMode from "./EDarkMode";

const DSimilarProducts = ({darkMode, handleDarkMode}) => {
  return (
    <>
      <section className={`${darkMode && 'darkMode'}`}>

        <p className={`cheap ${darkMode && 'is-active'}`}> Productos Similares más baratos </p>

        <section className="Products_section_container">
          <section className="section_auri">
            <img className="headphones" src={auri1} alt="Headphones Sony" />
            <div className="products_description">
              <p>Apple AirPods (3ª generación) con estuche de carga MagSafe</p>
              <span className="price">$29.999</span>
              <span className="free">
                Envío gratis <BsFillLightningFill /> FULL
              </span>
            </div>
          </section>

          <section className="section_auri">
            <img className="headphones" src={auri2} alt="Headphones Apple" />
            <div className="products_description">
              <p>Auriculares in-ear inalámbricos Sony WF-1000XM4 negro</p>
              <span className="price">$35.200</span>
              <span className="free">Envío gratis</span>
            </div>
          </section>

          <section className="section_auri">
            <img className="headphones" src={auri3} alt="Headphones Samsung" />
            <div className="products_description">
              <p>Auriculares in-ear inalámbricos Samsung Galaxy Buds Pro</p>
              <span className="price">$28.855</span>
              <span className="free">Envío gratis</span>
            </div>
          </section>
        </section>
          <EDarkMode darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      </section>
    </>
  );
};

export default DSimilarProducts;
