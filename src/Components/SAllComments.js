import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import "../Styles/SAllComments.css";
import TPositiveComments from "./TPositiveComments";
import UNegativeComments from "./UNegativeComments";

const SAllComments = ({
  all,
  positiveComments,
  positive,
  negativeComments,
  negative,
  allComments,
}) => {
  return (
    <>
      <section className="section_container_all_comments" >
        <section className="section_total_comments">
          <button className="btnComments" onClick={allComments}>Todas</button>
          <button className="btnComments" onClick={positiveComments}>Positivas</button>
          <button className="btnComments" onClick={negativeComments}>Negativas</button>
        </section>

        {all && (
          <section className="conatiner_comments">
            <section>
              <div>
                <AiFillStar className="iconStar_comment" />
                <AiFillStar className="iconStar_comment" />
                <AiFillStar className="iconStar_comment" />
                <AiFillStar className="iconStar_comment" />
                <AiFillStar className="iconStar_comment" />
              </div>

              <span className="span_comments">Tremendos! pero solo si....</span>

              <p>
                Lo bueno: tremendo producto. Para los que no saben estos en
                realidad son unos audeze mobius pero pintados de hyperx y sin
                bluetooth. Olvídate que vayas a conseguir un auricular que suene
                mejor, gamer o no. Los sony o bose esos con cancelación de
                sonido no tienen nada q hacer contra estos.
              </p>
            </section>

            <section>
              <div>
                <AiFillStar className="iconStar_comment" />
                <AiFillStar className="iconStar_comment" />
                <BsStarHalf className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
              </div>

              <span className="span_comments">Muy malo</span>

              <p>
                Absoluta basura, misma falla de fábrica que la versión anterior,
                de la nada deja de andar el auricular izquierdo con menos de
                tres meses de uso ligero siempre estático y en pc, sin haber
                sufrido golpes o destrato.
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
                La verdad tenia dudas al principio, me parecían muy aparatosos.
                Pero todo tiene un porqué. Lo primero que me sorprendió es la
                batería. Dura una eternidad! si los cargas de a ratos
                directamente jamás te vas a tener que preocupar por eso.
              </p>
            </section>

            <section>
              <div>
                <AiFillStar className="iconStar_comment" />
                <AiFillStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
              </div>

              <span className="span_comments">
                Auricular/audifonos con fallas fatales.
              </span>

              <p>
                Lamento informar que tiene una falla muy grave, deja de
                funcionar el lado izquierdo del audifono ( donde esta la perilla
                del encendido ). El cual tenemos que prender y apagar ( dicha
                perilla ) para que haga contacto el auricular.
              </p>
            </section>

            <section>
              <div>
                <AiFillStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
                <AiOutlineStar className="iconStar_comment" />
              </div>

              <span className="span_comments">Problemas</span>

              <p>
                Los primeros dos meses funciono perfecto pero actualmente no le
                funciona el lado izquierdo del headset y tuve varios problemas
                con el microfono. Nunca se me cayo, nunca se me mojo, no le
                ocurrió nada. La verdad es que querria un reembolso pero ya es
                tarde.
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
                Excelente producto en todo sentido, muy comodo y liviano, el
                sonido es una maravilla y el microfono tambien. Yendo a las
                criticas que lei, muchos se quejan de los controladores en
                windows.
              </p>
            </section>
          </section>
        )}

        {positive && <TPositiveComments />}
        {negative && <UNegativeComments />}
      </section>
    </>
  );
};

export default SAllComments;
