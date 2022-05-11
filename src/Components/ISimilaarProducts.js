import React from "react";
import "../Styles/ISimilaarProducts.css";
import productV1 from "../Images/productosVendidos1.png";
import productV2 from "../Images/productosVendidos2.png";
import productV3 from "../Images/productosVendidos3.png";
import productV4 from "../Images/productosVendidos4.png";
import productV5 from "../Images/productosVendidos5.png";

const ISimilaarProducts = () => {
  return (
    <>
      <section className="container">
        <div className="slider">

          <div className="container_img">
            <img className="more_products" alt="Headphones" src={productV1} />
            <span className="price_similarProduct"> $116.999</span>
            <p className="free_similar">Envío gratis </p>
            <p className="descripton_similar">
              Auriculares gamer inalámbricos Razer Nari Ultimate for Xbox One
              negro y verde
            </p>
          </div>

          <div className="container_img">
            <img className="more_products" alt="Headphones" src={productV2} />
            <span className="price_similarProduct"> $33.653</span>
            <p className="free_similar"> Envío gratis </p>
            <p className="descripton_similar"> Auriculares Gamer Inalámbricos AStro A50 negro y gris </p>
          </div>

          <div className="container_img">
            <img className="more_products" alt="Headphones" src={productV3} />
            <span className="price_similarProduct"> $39.219</span>
            <p className="free_similar"> Envío gratis </p>
            <p className="descripton_similar"> Auriculares Audio-Technica M-Series ATH-M50x negro</p>
          </div>

          <div className="container_img">
            <img className="more_products" alt="Headphones" src={productV4} />
            <span className="price_similarProduct"> $14.299</span>
            <p className="free_similar"> Envío gratis </p>
            <p className="descripton_similar"> Auriculares Gamer Logitech G Series G433 black </p>
          </div>

          <div className="container_img">
            <img className="more_products" alt="Headphones" src={productV5} />
            <span className="price_similarProduct"> $13.900</span>
            <p className="free_similar"> Envío gratis </p>
            <p className="descripton_similar"> Auriculares gamer HyperX Cloud Alpha black y red </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ISimilaarProducts;
