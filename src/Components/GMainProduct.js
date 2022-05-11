import React from "react";
import "../Styles/GMainProduct.css";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";
import firstHeadphones from "../Images/principalAuriculares.png";
import secondHeadphones from "../Images/secondPrincipalProduct.png";
import threeHeadphones from "../Images/threePrincipalProduct.png";
import fourHeadphones from "../Images/fourPrincipalProduct.png";
import fiveHeadphones from "../Images/fivePrincipalProduct.png";

const GPrincipalProduct = ({
  onChangeProduct,
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  darkMode,
}) => {
  return (
    <>
      <section className={`PrincipalProduct ${darkMode && 'principalProdcut-active'}`}>
        <div className="newSold">
          <span>Nuevo</span>
          <hr className="hrMainProduct" />
          <span>84 Vendidos</span>
        </div>

        <p className="description_principal_product">
          {" "}
          Auriculares HEadset Hyperx Orbit S 7.1 Planar Head Tracking
        </p>

        <div className="icon_container">
          <span>
            <BsStarFill className="icon_star" />
            <BsStarFill className="icon_star" />
            <BsStarFill className="icon_star" />
            <BsStarFill className="icon_star" />
            <BsStarHalf className="icon_star" />
          </span>

          <span> 10 Opiniones</span>
        </div>

        <section>
          <div className="container_img_Principal">

            {productOne && (
              <img
                className="principalProduct"
                src={firstHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productTwo && (
              <img
                className="secondProduct"
                src={secondHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productThree && (
              <img
                className="secondProduct"
                src={threeHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productFour && (
              <img
                className="secondProduct"
                src={fourHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productFive && (
              <img
                className="secondProduct"
                src={fiveHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            <span className="changePrincipalProduct" onClick={onChangeProduct}>
              {" "}
              <BsArrowBarRight/>
            </span>
          </div>

          <div className={`container_colorAndimg ${darkMode && "conatiner_active"}`}>
            <div className={`color_black ${darkMode && "is-active"}`}>
              <span>Color :</span>
              <span> Negro</span>

            </div>

            <img
              className="shortProduct_principal"
              alt="Auricualres Hyperx Orbit S 7.1"
              src={firstHeadphones}
            />

          </div>
        </section>

        <section className="PrincipalProduct_price">
          <span>$39.259</span>
          <span>en 12x $ 5.567</span>
          <a href="#" className="principal_a_darkMode">Ver los medios de pago</a>
        </section>
      </section>
    </>
  );
};

export default GPrincipalProduct;
