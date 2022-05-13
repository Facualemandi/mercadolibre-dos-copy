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
import HFree from "./HFree";
import ISimilaarProducts from "./ISimilaarProducts";
import KButtons from "./KButtons";
import LSegurity from "./LSegurity";
import MBuySimilarProducts from "./MBuySimilarProducts";
import NFeatures from "./NFeatures";
import ODescriptionProduct from "./ODescriptionProduct";
import PInformationSell from "./PInformationSell";
import QOpinions from "./QOpinions";
import RQquestions from "./RQquestions";
import SAllComments from "./SAllComments";
import VCards from "./VCards";

const GPrincipalProduct = ({
  onChangeProduct,
  changeOneImage,
  changeSecondImgae,
  changeThreeImage,
  changeFourImage,
  changeFiveImage,
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  darkMode,
  searchValue,
  setSearchValue,
  question,
  setQuestion,
  valueComent,
  setValueComent,
  all,
  setAll,
  positive,
  setPositive,
  negative,
  setNegative,
  positiveComments,
  negativeComments,
  allComments,
}) => {
  return (
    <>
      <section
        className={`PrincipalProduct ${darkMode && "principalProdcut-active"}`}
      >
        <aside className="section_product_desktop">
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

          <section className="price_principalProduct_Desktop">
            <span>$39.259</span>
            <span>en 12x $ 5.567</span>
            <a href="#" className="principal_a_darkMode">
              Ver los medios de pago
            </a>
            <HFree />

            <div className={`color_black ${darkMode && "is-active"}`}>
              <span>Color :</span>
              <span> Negro</span>
            </div>
          </section>

          <section className="sections_aside">
            <div className="buttons_desktop">
              <KButtons />
            </div>
            <div className="Lsegurity">
              <LSegurity />
            </div>

            <div className="information_vendedor">
              <PInformationSell />
            </div>

            <div className="cards">
                <VCards/>
            </div>
          </section>
        </aside>

        <section>
          <div className="container_img_Principal">
            {productOne && (
              <>
                <img
                  className="firstProduct"
                  src={firstHeadphones}
                  alt="Auricualres Hyperx Orbit S 7.1"
                />
              </>
            )}

            {productTwo && (
              <img
                className="firstProduct"
                src={secondHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productThree && (
              <img
                className="firstProduct"
                src={threeHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productFour && (
              <img
                className="firstProduct"
                src={fourHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}

            {productFive && (
              <img
                className="firstProduct"
                src={fiveHeadphones}
                alt="Auricualres Hyperx Orbit S 7.1"
              />
            )}
            <ISimilaarProducts />

            <div className="div_features">
              <NFeatures />
              <hr/>
            </div>

            <div className="Description_products">
              <ODescriptionProduct />
            </div>

            <div className="opionions_container">
              <hr/>
              <QOpinions />
            </div>

            <span className="changePrincipalProduct" onClick={onChangeProduct}>
              {" "}
              <BsArrowBarRight />
            </span>

            <div className="div_questions">
              <RQquestions
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                question={question}
                setQuestion={setQuestion}
                valueComent={valueComent}
                setValueComent={setValueComent}
                darkMode={darkMode}
               
              />
            </div>

    

            <div className="total_all_comments">
            <SAllComments
            all={all}
            setAll={setAll}
            positive={positive}
            setPositive={setPositive}
            negative={negative}
            setNegative={setNegative}
            positiveComments={positiveComments}
            negativeComments={negativeComments}
            allComments={allComments}
          />
            </div>

           
          </div>

          <div
            className={`container_colorAndimg ${
              darkMode && "conatiner_active"
            }`}
          >
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
          <a href="#" className="principal_a_darkMode">
            Ver los medios de pago
          </a>

          <HFree />
          <KButtons />
          <LSegurity />
          <hr />
          <MBuySimilarProducts darkMode={darkMode} />
          <hr />
          <PInformationSell />
          <hr />
          <NFeatures />
          <hr />
          <ODescriptionProduct />
          <hr/>
          <VCards/>
          <hr />
          <QOpinions />
          <hr />
          <RQquestions
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            question={question}
            setQuestion={setQuestion}
            valueComent={valueComent}
            setValueComent={setValueComent}
            darkMode={darkMode}
          />
          <hr />
          <SAllComments
            all={all}
            setAll={setAll}
            positive={positive}
            setPositive={setPositive}
            negative={negative}
            setNegative={setNegative}
            positiveComments={positiveComments}
            negativeComments={negativeComments}
            allComments={allComments}
          />
        </section>

        <section className="productDesktop">
          <img
            className="secondProduct"
            src={firstHeadphones}
            alt="Auricualres Hyperx Orbit S 7.1"
            onClick={changeOneImage}
          />

          <img
            className="secondProduct"
            src={secondHeadphones}
            alt="Auricualres Hyperx Orbit S 7.1"
            onClick={changeSecondImgae}
          />

          <img
            className="secondProduct"
            src={threeHeadphones}
            alt="Auricualres Hyperx Orbit S 7.1"
            onClick={changeThreeImage}
          />
          <img
            className="secondProduct"
            src={fourHeadphones}
            alt="Auricualres Hyperx Orbit S 7.1"
            onClick={changeFourImage}
          />
          <img
            className="secondProduct"
            src={fiveHeadphones}
            alt="Auricualres Hyperx Orbit S 7.1"
            onClick={changeFiveImage}
          />
        </section>
      </section>
    </>
  );
};

export default GPrincipalProduct;
