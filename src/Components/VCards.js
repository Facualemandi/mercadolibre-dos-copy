import React from "react";
import "../Styles/VCards.css";
import cabal from "../Images/cabal.png";
import mastercarddebito from "../Images/mastercarddebito.png";
import mercadocredito from "../Images/mercadocredito.png";
import naranja from "../Images/naranja.png";
import pagofacil from "../Images/pagofacil.png";
import rapipago from "../Images/rapipago.png";
import tarjeta from "../Images/tarjeta.png";
import tarjeta2 from "../Images/tarjeta2.png";
import visa from "../Images/visa.png";
import visadebito from "../Images/visadebito.png";
import mastercard from "../Images/mastercard.svg";

const VCards = () => {
  return (
    <>
      <section className="total_cards">

        <section className="cuotas">
          <p> Medios de pago</p>
          <p> Hasta 12 cuotas sin interes</p>
          <img src={mercadocredito} alt="cabal" />
        </section>

        <section className="credits_cards">
          <p>Tarjetas de crédito</p>
          <span>¡Cuotas sin interés con bancos seleccionados!</span>
        </section>

        <section className="total_credits_cards">
          <img src={visa} alt="Visa" />
          <img src={tarjeta2} alt="Tarjeta" />
          <img src={naranja} alt="Tarjeta naranja" />
          <img src={mastercard} alt="Mastercard" />
        </section>


        <section className="total_debito_cards">
        <p>Tarjetas de Débito</p>
          <img src={visadebito} alt="Visa" />
          <img src={tarjeta} alt="Tarjeta" />
          <img src={mastercarddebito} alt="Mastercard Débito" />
          <img src={cabal} alt="Cabal" />
        </section>

        <section className="efective">
          <p>Efectivo</p>
          <img src={pagofacil} alt="PagoFácil" />
          <img src={rapipago} alt="Rapipago" />
        </section>
      </section>
    </>
  );
};

export default VCards;
