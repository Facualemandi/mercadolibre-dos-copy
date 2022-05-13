import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import '../Styles/TPositiveComments.css'

const TPositiveComments = () => {
  return (
    <>
    <section className="section_comments">
      <section >
        <div>
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
        </div>

        <span className="span_comments">Tremendos! pero solo si....</span>

        <p>
          Lo bueno: tremendo producto. Para los que no saben estos en realidad
          son unos audeze mobius pero pintados de hyperx y sin bluetooth.
          Olvídate que vayas a conseguir un auricular que suene mejor, gamer o
          no. Los sony o bose esos con cancelación de sonido no tienen nada q
          hacer contra estos.
        </p>
      </section>

      <section>
        <div>
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <BsStarHalf className="iconStar_comment" />
        </div>

        <span className="span_comments">Lo mejor que he usado</span>

        <p>
          Excelente producto en todo sentido, muy comodo y liviano, el sonido es
          una maravilla y el microfono tambien. Yendo a las criticas que lei,
          muchos se quejan de los controladores en windows.
        </p>
      </section>

      <section>
        <div>
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
          <AiFillStar className="iconStar_comment" />
        </div>

        <span className="span_comments">Una fiesta para mis oídos</span>

        <p>
          La verdad tenia dudas al principio, me parecían muy aparatosos. Pero
          todo tiene un porqué. Lo primero que me sorprendió es la batería. Dura
          una eternidad! si los cargas de a ratos directamente jamás te vas a
          tener que preocupar por eso.
        </p>
      </section>

    </section>
    </>
  );
};

export default TPositiveComments;
