import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import '../Styles/UNegativeComments.css'

const UNegativeComments = () => {
  return (
      <>
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
        
      </>
  )
}

export default UNegativeComments